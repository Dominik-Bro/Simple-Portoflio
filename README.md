# Minimalistyczne portfolio kartowe

To jest jednostronicowe portfolio SPA bez frameworka. Nawigacja pomiędzy sekcjami odbywa się przez JavaScript i historię przeglądarki — nie ma przeładowywania strony ani przechodzenia na osobne podstrony.

## Pliki

- `index.html` — struktura dokumentu i ładowanie assetów.
- `styles.css` — cały wygląd, responsywność i animacje.
- `content.js` — **tutaj edytujesz treść portfolio**.
- `script.js` — logika kart, historii, przejść pomiędzy sekcjami i animacji rozwijania szczegółów.

## Edycja treści

Najwygodniej wejść w `content.js` i zmienić:

- `PORTFOLIO.person` — imię, nazwisko, rola i tekst startowy.
- `PORTFOLIO.sections` — nazwy sekcji i kolejność kart.
- `PORTFOLIO.cards` — zawartość kart i szczegóły po kliknięciu.

Karta z polem `children` prowadzi do kolejnego zestawu kart. Karta bez `children`, ale z `detail`, otwiera rozwinięcie zajmujące większość viewportu.

## Media

W `detail.media` można podać np.:

```js
{ type: "image", src: "assets/linux.png", alt: "Zrzut ekranu" }
{ type: "video", src: "assets/demo.mp4", label: "Demo" }
```

Pusta wartość `src` daje placeholder, więc strona nie zawiesza się, gdy jeszcze nie masz gotowych materiałów.

## Uruchomienie

Możesz otworzyć `index.html` bezpośrednio w przeglądarce. Do wygodniejszej pracy lokalnej najlepiej użyć prostego serwera, np.:

```bash
python -m http.server 8000
```

następnie wejść na `http://localhost:8000`.

## Założenia techniczne

Karty używają proporcji A4 `210 / 297`, wysokości `55vh`/`55svh`, horyzontalnego przewijania na mniejszych ekranach, animacji hover o długości 500 ms oraz przejścia między sekcjami typu fade-out / fade-in.
