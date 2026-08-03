Landing Page (Projekt Pokazowy)
Projekt pokazowy — nowoczesny landing page dla realizatora dźwięku, zbudowany w oparciu o projekt graficzny z Figmy przy użyciu Astro, czystego HTML5, nowoczesnego CSS oraz Vanilla JavaScript.

🚀 O Projekcie
Strona została zrealizowana jako czysty, lekki i wysoce zoptymalizowany interfejs webowy (architektura oparta na komponentach, brak ciężkich frameworków po stronie klienta), skupiający się na wysokiej wydajności oraz wiernym odwzorowaniu detali wizualnych z Figmy.

🌟 Główne Funkcjonalności i Detale Techniczne
Efektowny Hero z Wizualizatorem Audio (HTML5 Canvas)

Dedykowany oscyloskop fali dźwiękowej (5 harmonicznych fal sinusowych) zaimplementowany w tle sekcji Hero, reagujący na ruchy kursora myszy (zmiana częstotliwości i amplitudy).

Dedykowana Galeria zdjęć (PhotoGrid & Fullscreen Lightbox)

Układ kafelków (Honeycomb layout) z płynną animacją przejścia z odcieni szarości (grayscale 100%) do pełnego koloru z efektem hover i powiększeniem (scale 1.08).

Pełnoekranowa galeria zdjęć (Lightbox Modal) z obsługą nawigacji myszką oraz klawiaturą (Strzałki ← / →, ESC).

Interaktywna Sekcja "Przed i Po" (Audio Waveform Player)

Przełącznik próbek materiału dźwiękowego z animowanym stanem odtwarzania.

Płynne Bannery Tekstowe (Marquee Slider)

Dwuwierszowe bloki tekstowe przetasowujące się w płynnej pętli bez zacięć.

Zaawansowana Animacja Przycisków (4-Side Perimeter Draw)

Zegarowa animacja rysowania obwódki wokół przycisków CTA przy najechaniu myszką.

Wydajność i Optymalizacja

Semantyczny kod HTML5, pełne meta tagi oraz wysoka wydajność renderowania dzięki architekturze Astro.

🛠️ Stos Technologiczny
Framework: Astro

Stylizacje: Vanilla CSS3 (zmienne CSS, Flexbox, CSS Grid)

Skrypty: JavaScript (ES6+), HTML5 Canvas

Zasoby: Ikony SVG, fonty Google (Inter, Neue Haas Grotesk)

📁 Struktura Projektu
Plaintext
fast-filament/
├── public/                # Zasoby statyczne (zdjęcia portfolio, ikony SVG)
├── src/
│   ├── components/        # Komponenty strony (Navbar, Hero, PhotoGrid, Marquee, Audio Player, Kontakt itp.)
│   ├── styles/            # Style globalne, zmienne CSS i animacje
│   └── pages/
│       └── index.astro    # Główny szablon strony
├── package.json
└── README.md
⚙️ Instrukcja Uruchomienia Lokalnego
Klonowanie repozytorium:

Bash
git clone <link-do-twojego-repozytorium>
cd fast-filament
Instalacja zależności:

Bash
npm install
Uruchomienie w trybie deweloperskim:

Bash
npm run dev
Aplikacja uruchomi się pod adresem: http://localhost:4321

Budowanie produkcyjne:

Bash
npm run build