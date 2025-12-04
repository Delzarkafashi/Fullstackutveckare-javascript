# Vecka 2 – Produktsida, Steg 1 (HTML-struktur)


## Vad ska vi göra
- Skapa **en enkel produktsida** med:
  - Rubrik för sidan: `Products`
  - En **steg-label** som visar att vi är på *Steg 1: HTML struktur*
  - Ett **produktkort** för en hoodie:
    - titel  
    - bild  
    - kort beskrivning  
    - pris  
    - storleksval
    - färgval
    - köp-knapp
- Allt detta ska ligga inne i `main` (från vecka 1-layouten).
- Vi använder **bara HTML + CSS** här, ingen JavaScript än.

---

## Hur man ska tänka
- Fokus är fortfarande **struktur**, inte logik eller funktioner.
- Tänk: “Hur bygger jag upp en **produktsida**?” inte “Hur gör jag köp-knappen smart?”.
- Se `Products` + `step-label` som **sidans ram** och produktkortet som **en modul** vi kan återanvända flera gånger.
- Varje del i kortet (titel, bild, beskrivning, pris, knapp) ska ha **egen klass** och tydlig plats i layouten.Storleksvalet och färgvalet ska också ses som egna delar i layouten – de ska ha egna klasser och en tydlig plats i griden precis som pris och köp-knapp
- `product-grid` ska kännas som ytan där alla produkter kan stå, även om vi bara har **en produkt** nu.
- CSS: använd grid mest för att **placera** saker, inte för att göra avancerad design. Storlek och färg placeras också i griden så att kortet blir logiskt uppbyggt och redo för framtida JavaScript.
- Det är okej om sidan ser enkel ut – viktigast är att **strukturen är ren och lätt att bygga vidare på i steg 2 och 3**.

---

## Pseudokod – Vecka 2
1. Öppna projektet från vecka 1.
2. Skapa / öppna filen `produkter.html`.
3. I `<main>` på `produkter.html`:
   - Lägg till `div.page-namn` med `<h1>Products</h1>`.
   - Lägg till `p.step-label` med texten `Steg 1: HTML struktur`.
4. Under detta:
   - Skapa `div.product-grid`.
   - Inuti `product-grid`: skapa `div.parent-klader`.
   - Inuti `parent-klader`: skapa `section.produkt-kort-klader` med `aria-label`.
5. I `section.produkt-kort-klader`:
   - Lägg till `h3.titel-klader` med texten “Hoodie grön (HTML)”.
   - Lägg till `div.bild-klader` med en `<img>` som pekar på `assets/images/hoodie-grön.jpg`.
   - Lägg till `p.beskrivning-klader` med kort beskrivning.
   - Lägg till `div.pris-klader` med priset “399 kr”.
   - Lägg till storleksval (div.produkt-storlek med S, M, L-knappar).
   - Lägg till färgval (div.produkt-farg med röd, svart, vit-knappar).
   - Lägg till `button.kop-knapp-klader` med texten “Köp” och ett tydligt `aria-label`.
6. Öppna `style.css`:
   - Ge `.step-label` stil och centrera den.
   - Gör `.product-grid` till en grid som kan hålla produktkort.
   - Sätt bredd/höjd på `.parent-klader`.
   - Använd CSS-grid i `.produkt-kort-klader` för att placera:
     - titel överst
     - bild i mitten
     - beskrivning under bilden
     - pris under beskrivningen
     - storleksval under priset
     - färgval under storleken
     - köp-knapp längst ner
7. Spara alla filer och testa i webbläsaren:
   - Kontrollera att rubriken, step-label och produktkortet syns korrekt.
