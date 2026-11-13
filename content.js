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
            text: "Wszystkie tricki, które potrafię w terminalu.",
            tags: ["Debian", "Proxmox", "Docker", "Rhel"],

            detail: {
              title: "Linux",
              lead: "Z Linuxem mam doświadczenie od wielu lat i praktycznie na, co dzień korzystam z terminala. Mój laptop (na, którym stworzyłem tę stronę) od paru dobrych miesięcy działa pod kontrolą Fedory (systemu powiązanego bezpośrednio z RHEL). Na moim miniPC korzystam za to z Proxmoxa, który to jest podwaliną dla całego mojego Homelaba. Gdzieś w tym wszystkim znajduje się jeszcze Raspberry Pi, Router z otwartym system OpenWRT i parę innych osobistych urządzeń, na których teoretycznie Linux, nigdy nie powinien się znaleźć. Jeżel chodzi o Linuxa W środowisku zawodowym, to miałem przyjemnośc zarządzać klastrem Proxmox'a z łącznie 3-nodami (bez CEPH) oraz konfigurować postawione na nim wirtualne maszyny oraz kontenery korzystające właśnie z systemu Linux",
              sections: [
              ],
              list: [
                {text: "Najważniejsze umiejętności związane z Linuxem", bold: true},
                "Zarządzanie przez SSH + SFTP",
                "Obsługa Terminala",
                "Docker i Docker Compose",
                "Proxmox",
                "Konfiguracja Firewalla, Routingu i innych aspektów sieciowych na Linuxie",
                "troubleshooting",
                "Git i wersjonowanie",
                "Instalacja i konfiguracja",
                "Zarządzanie użytkownikami i uprawnigoogeniami",
                "Uruchamianie usług",
                "Planowanie zadań (np. przez Cron)",
                "Tworzenie skryptów Bashowych"
              ],
              media: [
                { type: "image", src: "fastfetch.png", alt: "Miejsce na zrzut ekranu terminala" },
              ]
            }
          },

          {
            eyebrow: "SKILLS / 02",
            title: "Windows",
            text: "Małe skrypty i powtarzalne procesy, które oszczędzają czas.",
            tags: ["Windows", "AD", "LDAP", "RDP"],

            detail: {
              title: "Windows (Server)",
              lead: "W swojej pracy i życiu codziennym, często mam do czyniania z systemami od firmy Microsoft, czyli różnymi wariantami Windowsa. Oprócz banalnych rzeczy polegających na obłudze komputera, instalacji aplikacji, instalacji sterowników, zmianie ustawień itp. mam też doświadczenie z bardziej zaawansowanymi czynnościami, na przykład z: tworzeniem skrytpów automatyzujących poszczególne działnia, obsługą Active Directory oraz GPO, zarządzeniem stronami hostowanymi przez IIS, tworzeniem nowych share'ów SMB, konfiguracją lokalnego DNS'a, czy też obsługą Hyper-V. W przypadku Active Directory zajmowałem się już między innymi dodawaniem nowych użytkowników i przypisywaniem ich do konkretych OU, dodawaniem użytkowników do poszczególnych grup, nadawaniem grupom konretnych uprawnień (np. dostęp do danego Share'a SMB, czy połączeń RDP), oraz integracją LDAP z innymi usługami (np. Synology NAS, czy NextCloud).",
              sections: [
                {
                }
              ],
              list: [
                "Obsługa komputera",
                "Diagnoza i rozwiązywanie problemów",
                "Backupy",
                "Obsługa Active Directory",
                "Integracje przez LDAP",
                "Konfiguracja lokalnego DNS",
                "Skrypty automatyzujące Power Shell",
                "Hyper-V",
                "IIS",
                "GPO",
                "Integracje z LDAP",
                "RDP",
                "SMB/NFS",
              ],
              media: []
            }
          },

          {
            eyebrow: "SKILLS / 03",
            title: "Sieci",
            text: "Od VLAN-ów i routingu po VPN-y, DNS i separacje sieci.",
            tags: ["VLAN", "VPN", "DNS", "Routing"],

            detail: {
              title: "Sieci",
              lead: "Zarządzanie siecią to chyba jedna z moich ulubionych czynności 'adminstracyjnych' zarówno w środowisku profesjonalnym, jak i we własnym domu. Konfiguracja nowych urządzeń sieciowych (np. routerów i Switchy) wraz z nadawaniem im IP i przypisywaniem do konkretnych vLAN'ów, segmentacja sieci, własnie na vLAN'y i konfiguracja zasad dozwolnych połączeń w firewallu, udostępnianie usług publicznie przez port forwarding, tworzenie nowych połączeń VPN (od site-client, przez site-site, aż po Mesh), konfiguracja routingu, czy DNS'a, to wszystko w czym się odnajduję, lubię i myślę, że wychodzi mi naturalnie ;)",
              sections: [
              ],
              list: [
                "VLAN / trunk",
                "Konfiguracja serwerów VPN (np. WireGuard)",
                "DNS",
                "DHCP",
                "Port forwarding i zarządzanie NAT'em",
                "Konfiguracja zasad Firewalla do prawidłowej segmentacji sieci",
                "VPN Site-Site oraz Mesh",
                "Routing",
                "Konfiguracja nowych urządzeń sieciowych (np. od Ubiquitii, Mikrotik, czy opartych o oprogramowanie OpenWRT)",
              ],
              media: [
              ]
            }
          },

          {
            eyebrow: "SKILLS / 04",
            title: "WWW i Proxy",
            text: "Strony Internetowe, Dashboardy, Domeny, SSL, i inne związane z WWW",
            tags: ["Nginx", "Apache", "Reverse Proxy", "SSL/TLS"],

            detail: {
              title: "WWW i Proxy",
              lead: "Podczas swoich prac hobbistycznych i 'Profesjonalny', dość często konfiguruję usługi powiązane ze stronami WWW. Mowa tutaj np. o konfiguracji serwera Nginx/Apache przy migracji strony postawionej na Wordpressie, wygenerowanie prawidłowego certyfikatu SSL/TLS dla domeny, postawienie serwera WWW za Reverse Proxy, aby tenże SSL prawidłowo terminować i zapewnić jakąś formę load balancingu i o wszystkich innych rzeczach, które trzeba wykonać by od koncepcji strony przejść do jej opublikowania w sieci LAN bądź WAN.",
              sections: [
              ],
              list: [
                "Konfiuracja serwerów WWW (np. Nginx i Apache)",
                "Konfiguracja Reverse Proxy",
                "Ustawienie TLS/SSL",
                "Zarządzenia domenami i subdomenami",
                "Prawidłowa Konfigruacja DNS",
                "Cloudflare",
                "Ustawienie 2FA przy wejściu na strone (np. poprzez narzędzia od Cloudflare)",
                "Loadbalancing",
              ],
              media: []
            }
          },
          {
            eyebrow: "SKILLS / 05",
            title: "Wirtualizacja",
            text: "Wirtualizacja i konteneryzacja do właściwego rozdzielenia zasobów",
            tags: ["Proxmox", "Docker", "Hyper-V", "Podman"],

            detail: {
              title: "Wirtualizacja",
              lead: "Większość wykonywanych przeze mnie profesjonalnych, czy hobbistycznych projektów nie byłaby możliwa bez zastosowania wirtualizacji do prawidłowego rozdzielenia i oddzielenia zasobów dostępnych na serwerze/komputerze. Jeśli chodzi o wybór Hypervisora to na co dzień w swoim Home Labie korzystam z Proxmoxa, na którym pracuje łącznie około 10 VM'ów/kontenerów LXC i na którym skonfigurowałem automatyczne tworzenie backupów do mojego dysku NAS oraz kopię lustrzaną na drugi dysk obecny w komputerze poprzez Pool ZFS. Z Proxmoxem miałem też już do czynienia w środowisku profesjonalny, gdyż jako Administrator zarządzałem Proxmox'owym klastrem składającym się z dedykowany serwerów. Idąc nieco 'niżej' Do uruchamiania pojedycznych usług zazwyczaj wykorzystuję Docker'a/Docker Compose, ale na niektórych specyficznych platformach korzystałem też z Podmana. Z innymi Hypervisorami (takimi jak Hyper-V) moje doświadzenie jest na pewno nieco mniejsze niż z Proxmoxem, jednak miałem już przyjemność tworzyć VM, konfigurować Snapshoty, tagować  zasoby konkretnymi vLAN'ami (co umożliwiało ich odpowiednie oddzielenie), czy też migrować zasoby z Hyper-V, do mojego preferowanego Hypervisora, czyli właśnie do Proxmoxa. ",
              sections: [
              ],
              list: [
                "Proxmox",
                "Hyper-V",
                "Docker i Docker Compose",
                "Podman",
                "Tworzenie Snapshotów",
                "Tworzenie i setup automatycznych backupów",
                "Migracja VM i kontenerów",
                "ZFS Pool wraz z kopią lustrzaną",
                "Tagowanie vLAN'ów dla VM/Kontenerów"
              ],
              media: [
              ]
            }
          },
          {
            eyebrow: "SKILLS / 06",
            title: "Sprzęt",
            text: "Diagnoza i naprawa sprzętu komputerowego (i nie tylko)",
            tags: ["PC", "Dignoza", "Naprawa", "Modyfikacje"],

            detail: {
              title: "Sprzęt",
              lead: "Praktycznie od małego interesowałem się sprzętem komputerowym i tym, jak on działa. Swój pierwszy komputer złożyłem samodzielnie w wieku 13 lat i od tego czasu moje doświadczenie w dignozowaniu i zajmowaniu się sprzętem tylko urosło. W swojej hobbystycznej 'karierze' naprawiałem już komputery, laptopy, telefony czy konsole. Modyfikowałem urządzenia, aby wyglądały i działały inaczej, albo oferowały porty, które nie były domyślnie dostępne (przykład: port USB-C w starych konsolach takich, jak PSP) i do dziś uważam to za zadania angażujące i satysfakcjonujące.",
              sections: [
              ],
              list: [
                "Diagnoza i naprawa sprzętu",
                "Wprowadzanie modyfikacji sprzętówych",
                "Lutowanie",
                "Posługiwanie się mulimetrem",
                "Projektowanie i druk 3D",
              ],
              media: [
              ]
            }
          },
          
          {
            eyebrow: "SKILLS / 07",
            title: "Wordpress",
            text: "Stawianie i zarządzenie stronami postawionymi na Wordpressie",
            tags: ["Wordpress", "Woocommerce", "Treść"],

            detail: {
              title: "Wordpress",
              lead: "Przy pracy jako Copywriter, Asystent, czy Administrator nierzadko miałem do czynienia z CMS Wordpress. Początkowo mój kontakt z Wordpress zaczął się 'Niewiine' - Wdrażanie prostych poprawek na stronie, aktualizacja szablonów, dodawanie nowych wpisów na blogu, produktów, czy też opisów. W późniejszym czasie musiałem się jednak z Wordpressem i Woocomerce zaznajomić nieco głepięj, by tworzyć od zera całkiem nowe podstrony, prowadzić migrację stron na inny hosting/VPS, czy też tworzyć nowe Wordpressowe witryny. Czy powiedziałbym, że znam Wordpressa najlepiej na świecie? Pewnie nie. Jednak znam go na tyle dobrze, by komfortowo wykonać na Wordpressowych stronach zdecydowaną większość czynności",
              sections: [
              ],
              list: [
                "Tworzenie i dodawanie opisów produktów",
                "Wystawienie nowych produktuów przez Woocommerce",
                "Migracja stron postawionych na Wordpressie",
                "Tworzenie Wordpressowych stron od zera",
                "Rozwiązanie problemów z funkcjonalnością witrny",
                "Aktualizacja Wordpressa i koniecznych do jego działania składników (Serwer WWW, PHP, baza danych, ewentualne Reverse Proxy),"
              ],
              media: [

              ]
            }
          },
          {
            eyebrow: "SKILLS / 08",
            title: "Copyrwriting",
            text: "Tworzenie treści na portale Internetowe i dokumentacji",
            tags: ["Copywriting", "Research", "Dokumentacja"],

            detail: {
              title: "Copywriting",
              lead: "Od dłuższego czasu tworzę treści w Internecie na tematy technologiczne. Moje artykuły pojawiały się między innymi na stronach Komputronika, oficjalnego sklepu Hama, czy też na portalu techpolska.pl. W swoich artykułach dzieliłem się głównie moją wiedzą techniczną na temat sprzętu i technologii. Doświadczenie jaki copywriter/redaktor dało mi podwaliny pod prowadzenie researchu oraz tworzenie czytelnej dokumentacji w późniejszych pracach związanych już bardziej z IT",
              sections: [
              ],
              list: [
                "Copywriting",
                "Research",
                "Dokumentacja",
                "CMS"
              ],
              media: [
              ]
            }
          },
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
            tags: ["Copywriting", "HTML", "Wordpress"],

            detail: {
              title: "Copywriter w firmie iSerwris",
              lead: "Pozycja Copywrtiera w firmie iSerwis to moja pierwsza stała współpraca, którą zawarłem po paru wcześniejszych freelancerskich doświadczeniach. W ramach ów współpracy moim głównym zadaniem było tworzenie, modyfikowanie oraz publikowanie treści na stronie refabryka.pl. W tej pracy, często konieczne było przeprowadzenie dogłębnego researchu, by dokładnie zgłębić dany temat. Takie doświadczenie na pewno mocno odbiło się też na wszystkich moich kolejnych współpracach w nieco innych dziedzinach. W zależności od konkretnej daty i stanu strony, do publikacji i edycji treści wykorzystywałem tutaj CMS Wordpress bądź też czysty HTML",
              sections: [
              ],
              list: [
                {text: "Czas pracy: 10.2022 - 09.2026", bold: true},
                {text: "Najważniejsze zadania:", bold:true},
                "Tworzenie treści technicznych i rozrywkowych na tematy okołotechnologiczne",
                "Publikowanie treści na stronie Internetowej (np. przez CMS Wordpress)",
                "Wprowadzanie prostych zmian wyglądu i zachowania strony",
                "Osadzanie obrazków oraz wideo na stronie, w wyznaczonych sekcjach",
                "Optymalizacja treści pod pozycję w wyszukiwarce"
              ],
              media: []
            }
          },

          {
            eyebrow: "EXPERIENCE / 03",
            title: "Asystent",
            text: "Zarządzenie stroną i produktami sklepu magcomplex",
            tags: ["CMS", "Wordpress", "Allegro", "Gimp"],

            detail: {
              title: "Asystent ds. platform internetowych ",
              lead: "W tej pracy zarządzałem dedykowanym sklepem Internetowym (opartym o Worpdressa + Woccomerce) oraz kontami na niektórych marketplace (Allegro, Olx) dla firmy mag-complex zajmującej się produkcją i importem regałów magazynowych oraz stołów warsztatowych.",
              sections: [
              ],
              list: [
                {text: "Czas pracy: 06.2025 - 09.2025", bold: true},
                {text: "Najważniejsze zadania:", bold:true},
                "Administracja sklepem internetowym mag-complex.pl (WordPress + WooCommerce): zarządzanie produktami, opisami i zasobami graficznymi",
                "Zarządzanie firmową stroną – tworzenie nowych podstron, aktualizacja treści",
                "Prowadzenie profili sprzedażowych na platformach Allegro i OLX",
                "Tworzenie i edycja grafik produktowych (GIMP)"
              ],
              media: [
              ]
            }
          }
        ]
      },

      {
        eyebrow: "03 / PROJECTS",
        title: "Projekty",
        text: "Rzeczy, które zrobiłem w pracy i prywatnie",
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
                "Tel: 514 307 124",
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
