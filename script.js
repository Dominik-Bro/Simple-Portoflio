(() => {
  "use strict";

  const DATA = window.PORTFOLIO;
  const app = document.querySelector("#app");
  const backButton = document.querySelector("#backButton");
  const status = document.querySelector("#sectionStatus");

  let navigation = ["start"];
  let isRendering = false;
  let activeDetail = null;
  let transitionTimer = null;

  const rootCards = DATA.sections.start.cards;
  const transitionDuration = 320;

  function escapeAttribute(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function getCard(id) {
    return DATA.cards[id];
  }

  function getSection(id) {
    return DATA.sections[id];
  }

  function buildHash(path) {
    return `#${path.filter((id) => id !== "start").join("/")}`;
  }

  function parseHash() {
    const hash = window.location.hash.replace(/^#/, "").trim();
    if (!hash) return ["start"];

    const pieces = hash.split("/").filter(Boolean);
    if (!pieces.length) return ["start"];

    const first = pieces[0];
    const card = getCard(first);
    const isRootCard = getSection("start")?.cards?.includes(first);

    return card && isRootCard && card.children?.length
      ? ["start", first]
      : ["start"];
  }

  function setHistory(path, replace = false) {
    const state = { portfolioPath: path };
    const hash = buildHash(path);
    if (replace) {
      history.replaceState(state, "", `${window.location.pathname}${hash}`);
    } else {
      history.pushState(state, "", `${window.location.pathname}${hash}`);
    }
  }

  function updateControls() {
    const atRoot = navigation.length === 1;
    backButton.disabled = atRoot;
    backButton.setAttribute("aria-disabled", String(atRoot));

    const active = navigation[navigation.length - 1];
    if (active === "start") {
      status.textContent = "Start";
      return;
    }

    const section = getSection(active);
    status.textContent = section?.label || active;
  }

  function updateDocumentTitle() {
    const active = navigation[navigation.length - 1];
    const section = getSection(active);
    document.title = active === "start"
      ? `Portfolio — ${DATA.person.name}`
      : `${section?.title || active} — ${DATA.person.name}`;
  }

  function cardMarkup(id, index, total) {
    const card = getCard(id);
    const cardType = card.children?.length ? "branch" : "leaf";
    const arrow = card.children?.length ? "↓" : "↗";

    return `
      <button class="card card--${cardType}" type="button" data-card-id="${escapeAttribute(id)}" aria-label="Otwórz ${escapeAttribute(card.title)}">
        <div class="card__top">
          <span class="card__index">${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}</span>
          <span class="card__arrow" aria-hidden="true">${arrow}</span>
        </div>

        <div class="card__body">
          <span class="eyebrow">${escapeAttribute(card.eyebrow || "CARD")}</span>
          <h3 class="card__title">${escapeAttribute(card.title)}</h3>
          <p class="card__text">${escapeAttribute(card.text)}</p>
        </div>

        <div class="card__tags" aria-hidden="true">
          ${(card.tags || []).map((tag) => `<span class="tag">${escapeAttribute(tag)}</span>`).join("")}
        </div>
      </button>
    `;
  }

  function cardDockMarkup(cards) {
    return `
      <div class="card-dock" tabindex="0" aria-label="Karty sekcji">
        ${cards.map((id, index) => cardMarkup(id, index, cards.length)).join("")}
      </div>
    `;
  }

  function startMarkup() {
    const person = DATA.person;

    return `
      <section class="view hero" id="view-start" data-view="start">
        <div class="hero__mast">
          <p class="eyebrow">PORTFOLIO / 2026</p>
          <h1>${escapeAttribute(person.name)}</h1>
          <p class="hero__role">${escapeAttribute(person.role)}</p>
          <p class="hero__intro">${escapeAttribute(person.intro)}</p>
        </div>
        ${cardDockMarkup(rootCards)}
      </section>
    `;
  }

  function sectionMarkup(sectionId) {
    const section = getSection(sectionId);

    return `
      <section class="view" id="view-${escapeAttribute(sectionId)}" data-view="${escapeAttribute(sectionId)}">
        <div class="section-heading">
          <p class="eyebrow">${escapeAttribute(section.label || sectionId)}</p>
          <h2>${escapeAttribute(section.title)}</h2>
          <p class="section-heading__subtitle">${escapeAttribute(section.subtitle || "")}</p>
        </div>
        ${cardDockMarkup(section.cards)}
      </section>
    `;
  }

  function markupForPath(path) {
    const activeSectionId = path.length > 1 ? path[path.length - 1] : null;
    return activeSectionId ? sectionMarkup(activeSectionId) : startMarkup();
  }

  function finishRender() {
    isRendering = false;
    updateControls();
    updateDocumentTitle();
  }

  function animateElement(element, keyframes, options) {
    if (!element) return Promise.resolve();

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !element.animate) {
      return Promise.resolve();
    }

    const animation = element.animate(keyframes, {
      fill: "forwards",
      easing: "ease",
      ...options,
    });

    return animation.finished.catch(() => {});
  }

  async function render(path = navigation, shouldAnimate = true) {
    const nextMarkup = markupForPath(path);
    const currentView = app.querySelector(".view");

    if (activeDetail) {
      closeDetail();
    }

    navigation = [...path];
    updateControls();
    updateDocumentTitle();

    isRendering = true;

    if (!shouldAnimate || !currentView) {
      app.innerHTML = nextMarkup;
      window.scrollTo({ top: 0, behavior: "auto" });
      finishRender();
      return;
    }

    // Fade-out jest uruchamiany przez Web Animations API za każdym razem,
    // więc nie zależy od ponownego dodawania/usuwania klas CSS.
    await animateElement(
      currentView,
      [
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0, transform: "translateY(-10px)" },
      ],
      {
        duration: 340,
        easing: "cubic-bezier(0.4, 0, 1, 1)",
      }
    );

    app.innerHTML = nextMarkup;
    window.scrollTo({ top: 0, behavior: "auto" });

    const nextView = app.querySelector(".view");

    // Wymuszamy świeży stan początkowy przed każdym fade-in.
    if (nextView) {
      nextView.style.opacity = "0";
      nextView.style.transform = "translateY(10px)";

      // Reflow gwarantuje, że kolejne wejście zostanie potraktowane jako nowe przejście.
      void nextView.offsetHeight;

      requestAnimationFrame(() => {
        animateElement(
          nextView,
          [
            { opacity: 0, transform: "translateY(10px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          {
            duration: 430,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          }
        ).finally(() => {
          nextView.style.opacity = "";
          nextView.style.transform = "";
          finishRender();
        });
      });
      return;
    }

    finishRender();
  }

  function goToCard(cardId) {
    if (isRendering) return;

    const card = getCard(cardId);
    if (!card) return;

    if (card.children?.length) {
      // Każda gałąź zastępuje aktualną sekcję. Nie dokładamy kolejnych widoków.
      navigation = ["start", cardId];
      setHistory(navigation);
      render(navigation, true);
      return;
    }

    openDetail(cardId);
  }

  function goBack() {
    if (isRendering) return;

    if (navigation.length <= 1) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    navigation = ["start"];
    setHistory(navigation);
    render(navigation, true);
  }

  function detailMarkup(cardId) {
    const card = getCard(cardId);
    const detail = card?.detail;
    if (!detail) return "";

    const sections = (detail.sections || []).map((section) => `
      <section class="detail-section">
        <h3>${escapeAttribute(section.heading)}</h3>
        <p>${escapeAttribute(section.body)}</p>
      </section>
    `).join("");

    const list = detail.list?.length ? `
      <div class="detail-list">
        <ul>
          ${detail.list.map((item) => `<li>${escapeAttribute(item)}</li>`).join("")}
        </ul>
      </div>
    ` : "";

    const media = (detail.media || []).map((item) => {
      if (item.type === "image" && item.src) {
        return `<img class="media-image" src="${escapeAttribute(item.src)}" alt="${escapeAttribute(item.alt || "")}" loading="lazy">`;
      }
      if (item.type === "video" && item.src) {
        return `<video class="media-video" controls preload="metadata" src="${escapeAttribute(item.src)}"></video>`;
      }
      return `<div class="media-placeholder">${escapeAttribute(item.label || item.alt || `Miejsce na ${item.type || "media"}`)}</div>`;
    }).join("");

    return `
      <div class="detail-layer" data-detail-layer>
        <article class="detail-card" role="dialog" aria-modal="true" aria-labelledby="detail-title-${escapeAttribute(cardId)}">
          <div class="detail-card__inner">
            <header class="detail-card__header">
              <div>
                <p class="eyebrow">${escapeAttribute(card.eyebrow || "DETAIL")}</p>
                <h2 class="detail-card__title" id="detail-title-${escapeAttribute(cardId)}">${escapeAttribute(detail.title || card.title)}</h2>
              </div>
              <button class="detail-close" type="button" data-detail-close aria-label="Zamknij szczegóły">×</button>
            </header>

            <p class="detail-card__lead">${escapeAttribute(detail.lead || card.text)}</p>

            <div class="detail-grid">
              <aside>${list}</aside>
              <div>${sections}</div>
            </div>

            ${media ? `<div class="detail-media">${media}</div>` : ""}

            <footer class="detail-card__footer">
              <button class="detail-back" type="button" data-detail-close>← Wróć do kart</button>
            </footer>
          </div>
        </article>
      </div>
    `;
  }

  function openDetail(cardId) {
    const cardElement = document.querySelector(`[data-card-id="${CSS.escape(cardId)}"]`);
    const cardData = getCard(cardId);
    if (!cardElement || !cardData?.detail || isRendering) return;

    const html = detailMarkup(cardId);
    if (!html) return;

    app.insertAdjacentHTML("beforeend", html);
    const layer = app.querySelector("[data-detail-layer]");
    const detailCard = layer?.querySelector(".detail-card");
    if (!layer || !detailCard) return;

    activeDetail = layer;
    document.body.classList.add("modal-open");

    const sourceRect = cardElement.getBoundingClientRect();
    const targetRect = detailCard.getBoundingClientRect();
    const dx = sourceRect.left + sourceRect.width / 2 - (targetRect.left + targetRect.width / 2);
    const dy = sourceRect.top + sourceRect.height / 2 - (targetRect.top + targetRect.height / 2);
    const sx = sourceRect.width / targetRect.width;
    const sy = sourceRect.height / targetRect.height;

    detailCard.style.setProperty("--dx", `${dx}px`);
    detailCard.style.setProperty("--dy", `${dy}px`);
    detailCard.style.setProperty("--sx", sx.toFixed(4));
    detailCard.style.setProperty("--sy", sy.toFixed(4));

    requestAnimationFrame(() => {
      requestAnimationFrame(() => layer.classList.add("is-visible"));
    });

    layer.addEventListener("click", (event) => {
      if (event.target === layer) closeDetail();
    });

    layer.querySelectorAll("[data-detail-close]").forEach((button) => {
      button.addEventListener("click", closeDetail);
    });
  }

  function closeDetail() {
    if (!activeDetail) return;

    const layer = activeDetail;
    const detailCard = layer.querySelector(".detail-card");
    layer.classList.remove("is-visible");

    window.setTimeout(() => {
      layer.remove();
      if (activeDetail === layer) activeDetail = null;
      document.body.classList.remove("modal-open");
    }, detailCard ? 510 : 260);
  }

  app.addEventListener("click", (event) => {
    if (isRendering) return;

    const card = event.target.closest("[data-card-id]");
    if (card) {
      event.preventDefault();
      goToCard(card.dataset.cardId);
      return;
    }
  });

  backButton.addEventListener("click", () => {
    if (activeDetail) {
      closeDetail();
      return;
    }
    goBack();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && activeDetail) {
      closeDetail();
      return;
    }

    if (event.key === "Escape" && navigation.length > 1) {
      goBack();
    }
  });

  window.addEventListener("popstate", () => {
    if (activeDetail) closeDetail();
    navigation = parseHash();
    render(navigation, true);
  });

  window.addEventListener("hashchange", () => {
    // Obsługuje również nawigację hash wywołaną np. przez ręczną zmianę URL.
    const next = parseHash();
    if (buildHash(next) !== window.location.hash) {
      setHistory(next, true);
      return;
    }
    navigation = next;
    render(navigation, true);
  });

  navigation = parseHash();
  setHistory(navigation, true);
  render(navigation, false);
})();
