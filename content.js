/*
 * ================================================================
 *  PORTFOLIO — JEDYNY PLIK, KTÓRY MUSISZ EDYTOWAĆ
 * ================================================================
 *
 *  Nie musisz tutaj pilnować ID, children: ["linux", ...],
 *  typów "branch" / "leaf" ani osobnych obiektów sections/cards.
 *
 *  Zasada jest prosta:
 *    - cards = kafelki widoczne w danej sekcji
 *    - children = kolejne kafelki po kliknięciu
 *    - brak children = karta końcowa ze szczegółami
 *
 *  Możesz zmieniać tytuły, teksty, tagi, kolejność kart i całą strukturę.
 *  Po zmianie nazwy nie trzeba poprawiać żadnych odwołań.
 *
 *  Dla szczegółów karty końcowej:
 *    detail.sections — kolejne sekcje tekstu
 *    detail.list     — lista punktów
 *    detail.media    — zdjęcia / wideo
 *
 *  Media:
 *    { type: "image", src: "assets/plik.jpg", alt: "Opis" }
 *    { type: "video", src: "assets/film.mp4", label: "Opis" }
 *
 *  Gdy src jest pusty, strona pokazuje placeholder.
 * ================================================================
 */

const EDITABLE_PORTFOLIO = {
  person: {
    name: "Dominik Broszczak",
    role: "IT / Systemy / Sieci / Web",
    intro: "Minimalistyczne portfolio zbudowane jako mapa moich umiejętności, doświadczenia i projektów."
  },

  start: {
    label: "Start",
    title: "Poznaj mnie przez kilka kart.",
    subtitle: "Wybierz kierunek i zejdź niżej.",

    cards: [
      {
        eyebrow: "01 / SKILLS",
        title: "Umiejętności",
        text: "Systemy, sieci, automatyzacja i wszystko, co dzieje się pod maską.",
        tags: ["Linux", "Sieci", "Automatyzacja"],

        // Kliknięcie tego kafelka otwiera poniższy zestaw kart.
        children: [
          {
            eyebrow: "SKILLS / 01",
            title: "Linux",
            text: "Administracja, troubleshooting i budowanie usług bez zbędnej abstrakcji.",
            tags: ["Debian", "Ubuntu", "Fedora", "Arch"],

            detail: {
              title: "Linux",
              lead: "Najlepiej czuję się wtedy, gdy mogę wejść poziom niżej i zrozumieć, dlaczego coś działa albo nie działa.",
              sections: [
                {
                  heading: "Praktyka",
                  body: "Zarządzanie usługami, użytkownikami i uprawnieniami, siecią, logami, SSH, kontenerami oraz podstawową automatyzacją."
                },
                {
                  heading: "Co rozwijam",
                  body: "Coraz więcej czasu poświęcam na IaC, monitoring, niezawodność usług i powtarzalne wdrożenia."
                }
              ],
              list: [
                "systemd i journald",
                "SSH + klucze",
                "Docker / Compose",
                "Btrfs",
                "sieci Linux",
                "troubleshooting"
              ],
              media: [
                { type: "image", src: "", alt: "Miejsce na zrzut ekranu terminala" },
                { type: "video", src: "", label: "Miejsce na demo / nagranie" }
              ]
            }
          },

          {
            eyebrow: "SKILLS / 02",
            title: "Sieci",
            text: "Od VLAN-ów i routingu po VPN-y, DNS i dostęp między lokalizacjami.",
            tags: ["VLAN", "VPN", "DNS", "Routing"],

            detail: {
              title: "Sieci",
              lead: "Lubię budować sieci tak, żeby ich zachowanie było przewidywalne, łatwe do diagnozowania i sensownie odseparowane.",
              sections: [
                {
                  heading: "Praktyka",
                  body: "Konfiguracja VLAN, routingu, DHCP/DNS, tuneli WireGuard oraz dostępu do zasobów wewnętrznych."
                },
                {
                  heading: "Następny poziom",
                  body: "Więcej routingu dynamicznego, segmentacji i wysokiej dostępności."
                }
              ],
              list: [
                "VLAN / trunk",
                "WireGuard",
                "DNS / DHCP",
                "NAT",
                "firewalle",
                "site-to-site"
              ],
              media: [
                { type: "image", src: "", alt: "Miejsce na diagram sieci" }
              ]
            }
          },

          {
            eyebrow: "SKILLS / 03",
            title: "Automatyzacja",
            text: "Małe skrypty i powtarzalne procesy, które oszczędzają czas.",
            tags: ["Bash", "PowerShell", "Git"],

            detail: {
              title: "Automatyzacja",
              lead: "Automatyzuję przede wszystkim to, co wykonuje się często, według tych samych kroków i co łatwo niechcący zrobić ręcznie źle.",
              sections: [
                {
                  heading: "Narzędzia",
                  body: "Bash, PowerShell, Git oraz proste pipeline'y CI/CD tam, gdzie dają realną wartość."
                }
              ],
              list: [
                "skrypty administracyjne",
                "wdrożenia",
                "backupy",
                "masowe konfiguracje",
                "Git / CI",
                "diagnostyka"
              ],
              media: []
            }
          }
        ]
      },

      {
        eyebrow: "02 / EXPERIENCE",
        title: "Doświadczenie",
        text: "Moje dotychczasowe stanowsika, na których byłem zatrudniony",
        tags: ["Helpdesk", "Admin", "Content", "CMS"],

        children: [
          {
            eyebrow: "EXPERIENCE / 01",
            title: "Administrator",
            text: "Stanowisko Administratora IT w firmie Sputnik Doors",
            tags: ["Administracja", "Support", "Wdrożenia"],

            detail: {
              title: "Administrator IT Sputnik Doors",
              lead: "Praca jako administrator IT w firmie Sputnik Doors, była moim pierwszym komercynjym doświadczeniem w zarządzaniu inrastrukturom na której polegało wiele osób. Specyfika pracy była tutaj mocno mieszana i na pewno nie mogłem się tam nudzić. W zależności od dnia i godziny, byłem tam pierwszą linią wpsarcia zarabiającą nowy kabel Ethernet do czyjejś stacji roboczej, czy też rozwiązującą problemy z działaniem Worda u współpracowników. Administatorem sieci dzielącym sieć na vLAN'y, konfgurującym VPN'y i konfigurującym nowe urządzenia sieciowe. Czy też 'wdrożeniowcem', oddającym w ręce innych pracowników zestawy narzędzi takich, jak Nextcloud, aplikacje dla handlowców synchronizujące się z systemem ERP (współpraca z zewnątrzną firmą) lub też przenoszącym usługi hostingowe i pocztowe do nowego dostawcy.",
              sections: [
              ],
              list: [
                {text: "Czas pracy: 12.2025 - 06.2026", bold: true},
                {text: "Najważniejsze zadania:", bold:true},
                "Świadzenie wsparcia technicznego Help Desk/Service Desk",
                "Planowanie i realizacja projektów IT ukierunkowanych na modernizację infrastruktury",
                "Konfiguracja nowych urządzeń sieciowych Ubiquiti (access pointy, switche, routery)",
                "Zarządzanie sieciami vLAN zaporami sieciowymi, routingiem i port forwardingiem w celu zapewnieniania własciwej segmentacji i bezpieczeństwa sieci",
                "Konfiguraja i utrzymanie serwerów VPN (Remtoe Access oraz Site-to-Site)",
                "Administracja środowiskiem Window Server - Zarządzanie Active Directory, konfiguracja i wdrażanie zasad grup, synchronizacja usług z LDAP",
                "Wdrażanie i utrzymanie maszyn w środowisku Hyper-V oraz Proxmox",
                "Zarządzanie kontenerami Docker na maszynach wirtualncyh",
                "Administracja maszyn wirtualnych i serwerów z systemem Linux (zdalnie, przez SSH i SFTP, czy przez konsolę Proxmox'a)",
                "Bezpieczne udostepnianie aplikacji na zewnątrz z wykorzystaniem MFA, m.in przez usługę Cloudflare Tunnel",
                "Zarządzenie ceryfikatami SSL/TLS",
                "Konfiguracja i utrzymanie serwerów WWW (Apache, Nginx, OpenResty) oraz Reverse Proxy",
                "Modernizacja i administracja stron Internetowych opartych o CMS Wordpress",
                "Konfiguracja serwerów pocztowych na potrzeby stworzenia lokalnego systemu backupu wiadomości",
              ],
              media: []
            }
          },

          {
            eyebrow: "EXPERIENCE / 02",
            title: "Copywriter",
            text: "Tworzenie i zarządzanie treściami na stronie Internetowej refabryka.pl",
            tags: ["AD", "GPO", "Windows Server", "Linux"],

            detail: {
              title: "Administracja systemami",
              lead: "Łączę codzienną administrację z ciągłym porządkowaniem środowiska, żeby mniej rzeczy wymagało ręcznej interwencji.",
              sections: [
                {
                  heading: "Zakres",
                  body: "Active Directory, GPO, instalacje zdalne, usługi Windows/Linux, udziały sieciowe i podstawowe procedury awaryjne."
                },
                {
                  heading: "Podejście",
                  body: "Najpierw obserwowalność i powtarzalność, potem dokładanie kolejnej warstwy automatyzacji."
                }
              ],
              list: [
                "AD",
                "GPO",
                "PXE",
                "iDRAC",
                "NAS",
                "usługi Linux"
              ],
              media: []
            }
          },

          {
            eyebrow: "EXPERIENCE / 03",
            title: "Asystent",
            text: "Wirtualizacja, sieć, storage i usługi, które muszą po prostu działać.",
            tags: ["Proxmox", "Storage", "Monitoring"],

            detail: {
              title: "Infrastruktura",
              lead: "Najciekawsze są dla mnie systemy, w których pojedynczy serwer to dopiero początek — liczy się sposób połączenia wszystkiego w całość.",
              sections: [
                {
                  heading: "Praktyka",
                  body: "Proxmox, kontenery, monitoring, reverse proxy, DNS, storage oraz usługi uruchamiane w Docker Compose."
                }
              ],
              list: [
                "Proxmox",
                "LXC",
                "Docker Compose",
                "Nginx",
                "Zabbix",
                "Grafana"
              ],
              media: [
                { type: "image", src: "", alt: "Miejsce na schemat infrastruktury" }
              ]
            }
          }
        ]
      },

      {
        eyebrow: "03 / PROJECTS",
        title: "Projekty",
        text: "Rzeczy, które zrobiłem w pracy i prywatnide",
        tags: ["Wdrożenia", "Homelab", "Hobby"],

        children: [
          {
            eyebrow: "PROJECTS / 01",
            title: "Web",
            text: "Strony i migracje WordPress → statyczne wdrożenia, z naciskiem na wydajność.",
            tags: ["HTML", "CSS", "JS", "WordPress"],

            detail: {
              title: "Web",
              lead: "Interesuje mnie web, gdy można połączyć prosty frontend z porządną infrastrukturą i kontrolą nad całym wdrożeniem.",
              sections: [
                {
                  heading: "Przykłady",
                  body: "WordPress, WooCommerce, Cloudflare, statyczne generatory oraz własne rozwiązania bez dokładania pluginu do każdej funkcji."
                }
              ],
              list: [
                "HTML / CSS",
                "JavaScript",
                "WordPress",
                "WooCommerce",
                "Cloudflare",
                "SEO techniczne"
              ],
              media: [
                { type: "image", src: "", alt: "Miejsce na screen strony" }
              ]
            }
          },

          {
            eyebrow: "PROJECTS / 02",
            title: "Homelab",
            text: "Własne środowisko do testowania sieci, kontenerów, usług i automatyzacji.",
            tags: ["Self-hosting", "Docker", "VPN"],

            detail: {
              title: "Homelab",
              lead: "Homelab jest moim poligonem doświadczalnym: mogę testować rozwiązania, psuć je, odtwarzać i dokumentować bez wpływu na produkcję.",
              sections: [
                {
                  heading: "Przykładowe usługi",
                  body: "Reverse proxy, DNS, Jellyfin, automatyzacja, monitoring, kontenery, VPN oraz zdalny dostęp."
                }
              ],
              list: [
                "Proxmox",
                "Docker",
                "WireGuard",
                "AdGuard Home",
                "Jellyfin",
                "monitoring"
              ],
              media: [
                { type: "image", src: "", alt: "Miejsce na zdjęcie homelabu" }
              ]
            }
          },

          {
            eyebrow: "PROJECTS / 03",
            title: "Eksperymenty",
            text: "Małe projekty sprzętowe, Linux, ESP32 i nietypowe problemy, które są zbyt ciekawe, żeby je zostawić.",
            tags: ["ESP32", "Hardware", "Linux"],

            detail: {
              title: "Eksperymenty",
              lead: "Najwięcej uczę się na rzeczach, których nie ma w tutorialu krok po kroku.",
              sections: [
                {
                  heading: "Typowe kierunki",
                  body: "ESP32, małe urządzenia, nietypowe systemy Linux, naprawy sprzętu i testowanie granic istniejących rozwiązań."
                }
              ],
              list: [
                "ESP32",
                "mikrokontrolery",
                "Linux",
                "naprawy",
                "reverse engineering",
                "prototypy"
              ],
              media: []
            }
          }
        ]
      },

      {
        eyebrow: "04 / ABOUT",
        title: "O mnie",
        text: "Trochę o mnie i informacje kontaktowe.",
        tags: ["O mnie", "telefon", "email"],

        children: [
          {
            eyebrow: "ABOUT / 01",
            title: "Trochę o mnie",
            text: "Informacje o tym kim jestem, co lubię i jak chciałbym pracować",
            tags: ["ja"],

            detail: {
              title: "Trochę o mnie",
              lead: "Najbardziej cenię pracę, w której można połączyć samodzielność, techniczne grzebanie i sensowną dokumentację.",
              sections: [
                {
                  heading: "Zasada",
                  body: "Diagnozuję → upraszczam → automatyzuję → dokumentuję."
                }
              ],
              list: [
                "samodzielność",
                "dociekliwość",
                "dokumentacja",
                "powtarzalność"
              ],
              media: []
            }
          },

          {
            eyebrow: "ABOUT / 02",
            title: "Kontakt",
            text: "Informacje kontaktowe takie, jak adres email i numer telefonu",
            tags: ["email", "telefon"],

            detail: {
              title: "Kontakt",
              lead: "Jeżeli portfolio, Cię zainteresowało i chcesz porozmawiać, to można mnie znaleźć pod telefon i adresem email:",
              list: [
                "Tel: XXX",
                "email: dominikbroszczak@proton.me",
              ],
              media: []
            }
          }
        ]
      }
    ]
  }
};

/* -----------------------------------------------------------------
 *  PONIŻEJ NIE TRZEBA JUŻ NIC EDYTOWAĆ.
 *  To tylko konwerter prostego drzewa powyżej do formatu używanego
 *  przez obecny script.js.
 * ----------------------------------------------------------------- */

(() => {
  "use strict";

  const source = EDITABLE_PORTFOLIO;
  const sections = {};
  const cards = {};
  const usedIds = new Set(["start"]);

  function slugify(value) {
    return String(value)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/&/g, " i ")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 48) || "card";
  }

  function uniqueId(title) {
    const base = slugify(title);
    let id = base;
    let number = 2;

    while (usedIds.has(id)) {
      id = `${base}-${number}`;
      number += 1;
    }

    usedIds.add(id);
    return id;
  }

  function clone(value) {
    if (typeof structuredClone === "function") return structuredClone(value);
    return JSON.parse(JSON.stringify(value));
  }

  function addBranch(parentSectionId, cardSource, sectionNumber) {
    const cardId = uniqueId(cardSource.title);
    const childCards = Array.isArray(cardSource.children) ? cardSource.children : [];

    cards[cardId] = {
      type: "branch",
      eyebrow: cardSource.eyebrow || `SECTION / ${String(sectionNumber).padStart(2, "0")}`,
      title: cardSource.title,
      text: cardSource.text || "",
      tags: Array.isArray(cardSource.tags) ? [...cardSource.tags] : [],
      children: []
    };

    sections[cardId] = {
      label: cardSource.section?.label || cardSource.title,
      title: cardSource.section?.title || cardSource.title,
      subtitle: cardSource.section?.subtitle || "Wybierz konkretny obszar, aby zobaczyć szczegóły.",
      pathLabel: cardSource.section?.pathLabel || cardSource.title,
      cards: []
    };

    childCards.forEach((child, index) => {
      const childId = addCard(cardId, child, index + 1);
      cards[cardId].children.push(childId);
      sections[cardId].cards.push(childId);
    });

    return cardId;
  }

  function addCard(parentSectionId, cardSource, cardNumber) {
    const hasChildren = Array.isArray(cardSource.children) && cardSource.children.length > 0;

    if (hasChildren) {
      return addBranch(parentSectionId, cardSource, cardNumber);
    }

    const cardId = uniqueId(cardSource.title);

    cards[cardId] = {
      type: "leaf",
      eyebrow: cardSource.eyebrow || `CARD / ${String(cardNumber).padStart(2, "0")}`,
      title: cardSource.title,
      text: cardSource.text || "",
      tags: Array.isArray(cardSource.tags) ? [...cardSource.tags] : [],
      detail: clone(cardSource.detail || {
        title: cardSource.title,
        lead: cardSource.text || "",
        sections: [],
        list: [],
        media: []
      })
    };

    return cardId;
  }

  sections.start = {
    label: source.start.label || "Start",
    title: source.start.title || "",
    subtitle: source.start.subtitle || "",
    cards: []
  };

  source.start.cards.forEach((card, index) => {
    const cardId = addCard("start", card, index + 1);
    sections.start.cards.push(cardId);
  });

  window.PORTFOLIO = {
    person: source.person,
    sections,
    cards
  };
})();
