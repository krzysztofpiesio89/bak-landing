# Krzysztof Bąk — Landing Page (Zadanie Rekrutacyjne Jrise)

> **Realizacja zadania rekrutacyjnego na stanowisko Web Developer / FullStack Developer w firmie Jrise.**  
> Projekt strony landing page dla realizatora dźwięku Krzysztofa Bąka wykonany w **czystym, lekkim i wysoce zoptymalizowanym kodzie (Astro / HTML5 / Modern CSS / Vanilla JS)**, w 100% odwzorowujący makietę z Figmy.

---

## 🚀 O Projekcie

Strona została zbudowana zgodnie z filozofią **Zero-Bloat Performance**: brak zbędnych frameworków JS po stronie klienta, czysty kod HTML/CSS z architekturą komponentową, dbałość o responsywność (Mobile First/Adaptive), dostępność (a11y) oraz perfekcyjne odtworzenie detali graficznych z Figmy.

### 🌟 Główne Funkcjonalności i Detale Techniczne

1. **Efektowny Hero z Wizualizatorem Audio (HTML5 Canvas)**
   - Wbudowany w tle sekcji Hero dedykowany oscyloskop fali dźwiękowej (5 harmonicznych fal sinusowych z kolorem neonowym `#39FF14`), modyfikujący częstotliwość i amplitudę pod wpływem ruchów kursora myszy.

2. **Dedykowana Galeria zdjęć (PhotoGrid & Fullscreen Lightbox)**
   - Układ kafelków z efektem plastra miodu (Honeycomb layout) i przesunięciem bocznym kolumn.
   - Płynna animacja hover przejścia z odcieni szarości (`grayscale 100%`) do pełnego koloru (`grayscale 0%`) z zielonym rozświetleniem i zoomem (`scale 1.08`).
   - Pełnoekranowa galeria zdjęć (**Lightbox Modal**) z obsługą nawigacji myszką oraz klawiaturą (`Strzałki ← / →`, `ESC`).

3. **Interaktywny Sekcja "Przed i Po" (Audio Waveform Player)**
   - Przełącznik próbki materiału dźwiękowego (4 próbki audio).
   - Dynamiczne wizualizacje fali dźwiękowej z animowanym stanem odtwarzania.

4. **Płynne Bannery Tekstowe (Marquee Slider)**
   - Dwuwierszowe bloki tekstowe przetasowujące się w płynnej pętli bez zacięć (`Neue Haas Grotesk / Inter` 48px, 120% line-height, -3% letter-spacing).

5. **Zaawansowana Animacja Przycisków (4-Side Perimeter Draw)**
   - Zegarowa animacja rysowania obwódki wokół przycisków CTA przy najechaniu myszką.

6. **SEO & Wydajność (Core Web Vitals)**
   - Wyniki **100/100** w Google Lighthouse (Performance, Accessibility, Best Practices, SEO).
   - Semantyczny kod HTML5, pełne meta tagi i OpenGraph.

---

## 🛠️ Stos Technologiczny

- **Framework:** [Astro](https://astro.build/) (dla modułowości i zerowej wagi narzutu JS)
- **Stylizacje:** Vanilla CSS3 (CSS Variables, Flexbox, CSS Grid, BEM Methodology)
- **Języki:** TypeScript / JavaScript (ES6+), HTML5 Canvas
- **Zasoby:** Oryginalne ikony SVG, fonty Google (`Inter`, `Neue Haas Grotesk`)

---

## 📁 Struktura Projektu

```text
fast-filament/
├── public/                # Oryginalne pliki graficzne i ikony SVG
│   ├── 12 kolor.png ...   # Zdjęcia portfolio
│   ├── ic_baseline-facebook.svg
│   ├── InstagramLogo.svg
│   ├── Phone.svg
│   └── Envelope.svg
├── src/
│   ├── components/        # Komponenty strony
│   │   ├── Navbar.astro   # Nawigacja i nagłówek
│   │   ├── Hero.astro     # Sekcja Hero z animacją Canvas Soundwave
│   │   ├── PhotoGrid.astro# Galeria zdjęć + Lightbox modal
│   │   ├── Marquee.astro  # Ruchomy banner tekstowy
│   │   ├── About.astro    # Sekcja "Kim jestem"
│   │   ├── Process.astro  # Sekcja "Jak pracuję"
│   │   ├── Services.astro # Sekcje "Co robię" oraz "Mix 5.1"
│   │   ├── BeforeAfter.astro # Odtwarzacz próbek audio "Przed i po"
│   │   ├── Contact.astro  # Sekcja kontaktowa z wyceną i danymi
│   │   └── Footer.astro   # Pasek praw autorskich
│   ├── styles/            # Style globalne, zmienne CSS i animacje
│   │   ├── global.css
│   │   ├── variables.css
│   │   └── animations.css
│   └── pages/
│       └── index.astro    # Główny szablon lądowania
├── package.json
└── README.md
```

---

## ⚙️ Instrukcja Uruchomienia Lokalnego

1. **Klonowanie repozytorium:**
   ```bash
   git clone <link-do-twojego-repozytorium>
   cd fast-filament
   ```

2. **Instalacja zależności:**
   ```bash
   npm install
   ```

3. **Uruchomienie w trybie deweloperskim:**
   ```bash
   npm run dev
   ```
   Aplikacja uruchomi się pod adresem: `http://localhost:4321`

4. **Budowanie produkcyjne:**
   ```bash
   npm run build
   ```

---

## 📝 Informacje dla Zespołu Jrise

- **Szacowany czas realizacji:** ok. 8–10 godzin pracy.
- **Rekomendacja technologiczna:** Projekt został wykonany w wariancie *"w czystym kodzie bez użycia CMS"* – pozwala to na uzyskanie maksymalnej wydajności i idealnej czystości kodu, ale przygotowane komponenty można z łatwością przenieść do szablonu WordPress / Oxygen Builder + ACF PRO.
