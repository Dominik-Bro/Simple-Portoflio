/*
 * EDYTUJ GŁÓWNIE TEN PLIK.
 *
 * Każda karta może mieć:
 * - title       — duży tytuł karty
 * - eyebrow     — mały opis nad tytułem
 * - text        — krótki tekst widoczny na karcie
 * - tags        — małe znaczniki na dole karty
 * - children    — ID kolejnych kart/sekcji; obecność dzieci oznacza nawigację w dół
 * - detail      — szczegóły pokazywane po kliknięciu karty końcowej
 *
 * Dla mediów w szczegółach możesz podać lokalny plik, np. assets/linux.png.
 * Pusta ścieżka oznacza automatyczny placeholder.
 */

window.PORTFOLIO = {
  person: {
    name: "Dominik Broszczak",
    role: "IT / Systemy / Sieci / Web",
    intro: "Minimalistyczne portfolio zbudowane jako mapa moich umiejętności, doświadczenia i projektów."
  },

  sections: {
    start: {
      label: "Start",
      title: "Poznaj mnie przez kilka kart.",
      subtitle: "Wybierz kierunek i zejdź niżej.",
      cards: ["skills", "experience", "projects", "about"]
    },

    skills: {
      label: "Umiejętności",
      title: "To, czym lubię się zajmować.",
      subtitle: "Wybierz konkretny obszar, aby zobaczyć szczegóły.",
      pathLabel: "Umiejętności",
      cards: ["linux", "networks", "automation"]
    },

    experience: {
      label: "Doświadczenie",
      title: "Rzeczy, które robiłem w praktyce.",
      subtitle: "Od codziennego wsparcia po administrację infrastrukturą.",
      pathLabel: "Doświadczenie",
      cards: ["helpdesk", "systems", "infrastructure"]
    },

    projects: {
      label: "Projekty",
      title: "Kilka rzeczy, które zbudowałem.",
      subtitle: "Strony, self-hosting, sieci i eksperymenty techniczne.",
      pathLabel: "Projekty",
      cards: ["web", "homelab", "experiments"]
    },

    about: {
      label: "O mnie",
      title: "Trochę mniej technicznie.",
      subtitle: "Sposób pracy, ciekawość i kierunek rozwoju.",
      pathLabel: "O mnie",
      cards: ["workstyle", "learning"]
    }
  },

  cards: {
    skills: {
      type: "branch",
      eyebrow: "01 / SKILLS",
      title: "Umiejętności",
      text: "Systemy, sieci, automatyzacja i wszystko, co dzieje się pod maską.",
      tags: ["Linux", "Sieci", "Windows Server", "Proxmox"],
      children: ["linux", "networks", "automation"]
    },
    experience: {
      type: "branch",
      eyebrow: "02 / EXPERIENCE",
      title: "Doświadczenie",
      text: "Codzienna praca z użytkownikami, infrastrukturą i usługami IT.",
      tags: ["Helpdesk", "Admin", "Infra"],
      children: ["helpdesk", "systems", "infrastructure"]
    },
    projects: {
      type: "branch",
      eyebrow: "03 / PROJECTS",
      title: "Projekty",
      text: "Rzeczy robione po godzinach, od prostych stron po rozbudowany self-hosting.",
      tags: ["Web", "Homelab", "Open Source"],
      children: ["web", "homelab", "experiments"]
    },
    about: {
      type: "branch",
      eyebrow: "04 / ABOUT",
      title: "O mnie",
      text: "Trochę kontekstu o tym, jak pracuję i czego szukam dalej.",
      tags: ["Podejście", "Nauka"],
      children: ["workstyle", "learning"]
    },

    linux: {
      type: "leaf",
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
        list: ["systemd i journald", "SSH + klucze", "Docker / Compose", "Btrfs", "sieci Linux", "troubleshooting"],
        media: [
          { type: "image", src: "", alt: "Miejsce na zrzut ekranu terminala" },
          { type: "video", src: "", label: "Miejsce na demo / nagranie" }
        ]
      }
    },

    networks: {
      type: "leaf",
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
        list: ["VLAN / trunk", "WireGuard", "DNS / DHCP", "NAT", "firewalle", "site-to-site"],
        media: [{ type: "image", src: "", alt: "Miejsce na diagram sieci" }]
      }
    },

    automation: {
      type: "leaf",
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
        list: ["skrypty administracyjne", "wdrożenia", "backupy", "masowe konfiguracje", "Git / CI", "diagnostyka"],
        media: []
      }
    },

    helpdesk: {
      type: "leaf",
      eyebrow: "EXPERIENCE / 01",
      title: "Helpdesk",
      text: "Rozwiązywanie problemów użytkowników, sprzętu, systemów i podstawowej sieci.",
      tags: ["Users", "Support", "Troubleshooting"],
      detail: {
        title: "Helpdesk",
        lead: "Najważniejsze było szybkie odróżnienie problemu użytkownika od problemu systemowego oraz znalezienie przyczyny zamiast obchodzenia objawu.",
        sections: [
          {
            heading: "Zakres",
            body: "Stacje robocze, konta domenowe, drukarki, podstawowe problemy sieciowe, wdrożenia oprogramowania i codzienne wsparcie."
          }
        ],
        list: ["AD / użytkownicy", "Windows", "Office", "drukarki", "sieć", "sprzęt"],
        media: []
      }
    },

    systems: {
      type: "leaf",
      eyebrow: "EXPERIENCE / 02",
      title: "Administracja systemami",
      text: "Serwery, usługi, GPO, wdrożenia oprogramowania i utrzymanie środowiska.",
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
        list: ["AD", "GPO", "PXE", "iDRAC", "NAS", "usługi Linux"],
        media: []
      }
    },

    infrastructure: {
      type: "leaf",
      eyebrow: "EXPERIENCE / 03",
      title: "Infrastruktura",
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
        list: ["Proxmox", "LXC", "Docker Compose", "Nginx", "Zabbix", "Grafana"],
        media: [{ type: "image", src: "", alt: "Miejsce na schemat infrastruktury" }]
      }
    },

    web: {
      type: "leaf",
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
        list: ["HTML / CSS", "JavaScript", "WordPress", "WooCommerce", "Cloudflare", "SEO techniczne"],
        media: [{ type: "image", src: "", alt: "Miejsce na screen strony" }]
      }
    },

    homelab: {
      type: "leaf",
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
        list: ["Proxmox", "Docker", "WireGuard", "AdGuard Home", "Jellyfin", "monitoring"],
        media: [{ type: "image", src: "", alt: "Miejsce na zdjęcie homelabu" }]
      }
    },

    experiments: {
      type: "leaf",
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
        list: ["ESP32", "mikrokontrolery", "Linux", "naprawy", "reverse engineering", "prototypy"],
        media: []
      }
    },

    workstyle: {
      type: "leaf",
      eyebrow: "ABOUT / 01",
      title: "Sposób pracy",
      text: "Lubię rozumieć przyczynę problemu i zostawiać po sobie rozwiązanie, które da się powtórzyć.",
      tags: ["Praktyka", "Dokumentacja"],
      detail: {
        title: "Sposób pracy",
        lead: "Najbardziej cenię pracę, w której można połączyć samodzielność, techniczne grzebanie i sensowną dokumentację.",
        sections: [
          {
            heading: "Zasada",
            body: "Diagnozuję → upraszczam → automatyzuję → dokumentuję."
          }
        ],
        list: ["samodzielność", "dociekliwość", "dokumentacja", "powtarzalność"],
        media: []
      }
    },

    learning: {
      type: "leaf",
      eyebrow: "ABOUT / 02",
      title: "Kierunek rozwoju",
      text: "Rozwijam się w stronę administracji sieciami i systemami oraz DevOps.",
      tags: ["Networking", "Linux", "DevOps"],
      detail: {
        title: "Kierunek rozwoju",
        lead: "Docelowo chcę łączyć wiedzę z sieci, systemów i automatyzacji zamiast traktować te obszary jako oddzielne światy.",
        sections: [
          {
            heading: "Najbliższe cele",
            body: "Więcej praktyki z routingiem, automatyzacją, IaC, CI/CD, obserwowalnością i niezawodnością usług."
          }
        ],
        list: ["Cisco", "MikroTik", "Linux", "Ansible", "CI/CD", "observability"],
        media: []
      }
    }
  }
};
