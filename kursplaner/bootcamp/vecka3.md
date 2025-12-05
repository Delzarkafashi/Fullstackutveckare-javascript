# Vecka 3 — JavaScript grunder + fylla en produktbox

I vecka 3 börjar vi använda JavaScript för att styra innehållet på sidan.  
Vi tar en tom produktbox i HTML och fyller den med data från ett objekt.

---

## Vad ska vi göra

- Skapa ett **enkelt produktobjekt** i JavaScript (t.ex. vinterstövlar).
- Använda **variabler** för att hämta ut pris, namn och lagerstatus.
- Använda **if/else** för att skriva ut om produkten finns i lager.
- Använda **loopar** för att skriva ut storlekar och färger i konsolen.
- Skapa en **funktion** som räknar ut rabattpris.
- Hämta rätt **DOM-element** i den tomma produktboxen.
- Fylla boxen med:
  - titel  
  - bild  
  - beskrivning  
  - pris (med eller utan rabatt)  
  - rabatt-badge  
- Uppdatera `aria-label` och knapparnas text.
- tjuvstartat på DOM-delen och querySelector   av vecka 4

---
## Hur man ska tänka

- Fokus ligger på **grundläggande JavaScript**, inte avancerade funktioner.
- Tänk: ”Hur fyller jag en tom produktbox med **data från ett objekt**?”
- Se products-data.json (`vinterSko2`) som **källan** och HTML-boxen som **mottagaren**.
- Varje del av objektet (titel, bild, pris, storlekar, färger) ska **kopplas till rätt DOM-element**.
- Använd **variabler** för att plocka ut data, så du ser hur värden lagras.
- Använd **if/else** för att visa förståelsen av logik (t.ex. om produkten finns i lager).
- Använd **loopar** för att gå igenom storlekar och färger — även om de bara loggas i konsolen.
- Skapa enkla **funktion**, t.ex. för att räkna ut rabattpris, för att förstå hur funktioner återanvänder kod.
- Håll JavaScriptet **enkelt och tydligt**, fokus är att förstå flödet:  
  *data → logik → DOM*.
- HTML-kortet är fortfarande samma från vecka 2 — nu lär vi oss hur JS fyller det automatiskt.

---
## Pseudokod – Vecka 3
1. Skapa filen js/components/vecka-3-vinter-sko.js.
2. Skapa ett objekt (eller hämta från products-data.json) för en produkt, t.ex. vinterSko2:
   - id, name, category, season
   - colors (array med färger)
   - sizes (array med storlekar)
   - basePrice, discountPercent
   - image, inStock
3. Skapa funktionen calcDiscountPrice(product):
   - läs basePrice och discountPercent från product
   - räkna ut rabattbeloppet
   - sizes (array med storlekar)
   - basePrice, discountPercent
   - image, inStock
4. När sidan laddas (DOMContentLoaded):
   - skapa variabler:
    - price = vinterSko2.basePrice
    - name = vinterSko2.name
    - inStock = vinterSko2.inStock
   - console.log alla tre variabler
5. If/else:
   - om inStock är true → logga "Produkten finns i lager"
   - annars → logga "Produkten är slut i lager"
6. Loopar:
   - loopa över vinterSko2.sizes och logga varje storlek
   - loopa över vinterSko2.colors och logga varje färg
7. Anropa calcDiscountPrice(vinterSko2) och spara resultatet i discountedPrice.
8. Hämta rätt produktkort i DOM:
   - card = document.querySelector(".js-vinter-sko")
   - avbryt om card inte finns
9. Inifrån card, hämta:
   - titleEl = .titel-klader
   - imgEl = .bild-klader img
   - priceEl = .pris-klader
   - descEl = .beskrivning-klader
   - buyBtn = .kop-knapp-klader
   - imageBox = .bild-klader
10. Uppdatera innehåll:
   - sätt titel till name
   - sätt bildens src till image
   - sätt bildens alt till name
   - sätt beskrivning till en enkel text (t.ex. "Varma vinterstövlar för kalla dagar")
11. Prisvisning:
   - om discountPercent > 0:
    - visa originalpris överstruket
    - visa rabattpris (discountedPrice) tydligt
    - skapa en div.discount-badge med text -X% och lägg in i imageBox
   - annars:
    - visa bara basePrice
12. Tillgänglighet:
   - uppdatera aria-label på kortet med produktens namn
   - uppdatera aria-label på köp-knappen med produktnamn och aktuellt pris
13. Spara filen och ladda om sidan:
   - kontrollera i webbläsaren att:
    - produktkortet fylls med data från objektet
    - rabattpris och badge visas om rabatt finns
    - konsolen visar variabler, if/else och loopar som förväntat.