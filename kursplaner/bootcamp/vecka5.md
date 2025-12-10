# Vecka 5 — Klasser, moduler & dynamiska produktkort
I vecka 5 går vi från hårdkodad HTML till att låta **JavaScript + data** bygga produktsidan åt oss.
Vi använder klasser, moduler, JSON och `fetch` för att skapa återanvändbara produktkort.

---

## Vad ska vi göra
I vecka 5 bygger vi ett komplett produkt-system där varje produktkort skapas automatiskt från data.  
Vi delar upp logik i flera små filer (moduler) och använder klasser för att hålla koden ren.

vi kommer att:

- skapa en **Product-klass** som håller all produktdata
- skapa en **ProductCard-klass** som bygger HTML-kort i DOM
- hämta alla produkter från `products-data.json` med `fetch`
- rendera alla kort automatiskt i `#product-list`
- lägga logik i egna filer:
  - rabatt-beräkning
  - lagerstatus
  - storlekskontroll
  - färgbyte som byter produktbild
- använda JSON som “fake API” istället för hårdkodad data

Målet är att separera:
**data → logik → presentation**
så sidan blir enkel att utöka senare.

---

## Hur man ska tänka
Vecka 5 handlar om att bygga sidan så att **datan styr allt**, inte vi manuellt.  
I stället för att skriva HTML för varje produkt, låter vi JavaScript skapa korten åt oss.

- **`Product` = bara data**  
  Beskriver *vad* en produkt är (id, namn, pris, färger, storlekar, osv.),  
  men **ingen** DOM eller HTML här inne.

- **`ProductCard` = presentation**  
  Tar emot en `Product` och bygger upp hela kortet i DOM:  
  bild, titel, pris, rabatt, storlekar, färger, knapp osv.

- **Moduler (egna filer) gör EN sak var**  
  Exempel:
  - `calculateDiscountPrice.js` – räknar ut rabattpris  
  - `stockStatus.js` – ändrar köpknappen om varan är slut  
  - `sizeAvailability.js` – markerar storlekar som saknas  
  - `colorImageSwitcher.js` – byter bild när man klickar på färg

- **`produkter.js` = “API”-lagret**  
  - hämtar JSON med `fetch`  
  - gör `new Product(...)` för varje objekt  
  - gör `new ProductCard(product).render()`  
  - append:ar kortet i `#product-list`

- **JSON ersätter hårdkodning**  
  Lägger du till fler produkter i `products-data.json`  
  → sidan uppdateras automatiskt utan att du rör HTML.

- **All logik ska gå att återanvända**  
  Därför ligger varje “smart grej” i en egen fil  
  som importeras och används inne i `ProductCard`.

**Princip:**  
> Bygg klart kortet → applicera funktioner (rabatt, lager, färg, storlek) → lägg in i DOM.

Det gör koden:
- renare  
- lättare att testa  
- mycket enklare att bygga vidare på (filter, sök, kundvagn senare).

---

## Pseudokod – Vecka 5
1. Skapa `ProductClass.js`
   - exportera en klass `Product`
   - spara alla fält från datan:
     - id, name, description
     - category, season
     - colors, sizes
     - basePrice, discountPercent
     - image, inStock

2. Skapa `ProductCard.js`
   - importera:
     - `Product`
     - `calculateDiscountPrice`
     - `applyStockStatus`
     - `applySizeAvailability`
     - `setupColorImageSwitcher`
   - i `render()`:
     - skapa wrapper `<div class="parent-klader">`
     - skapa `<section class="produkt-kort-klader">`
     - lägg till:
       - titel (`h3.titel-klader`)
       - bild-wrapper (`div.bild-klader > img`)
       - beskrivning (`p.beskrivning-klader`)
         - använd `product.description`
         - kapa till ca 10 ord + `" ..."` om längre
       - pris-del (`div.pris-klader`)
         - räkna ut rabattpris med `calculateDiscountPrice(product)`
         - om rabatt:
           - lägg till badge `div.discount-badge`
           - visa originalpris överstruket
           - visa nytt pris större
         - annars: visa bara priset
       - storlekar:
         - skapa container `.produkt-storlek`
         - visa alla storlekar (t.ex. XS, S, M, L, XL)
       - färger:
         - skapa `.produkt-farg`
         - skapa färgknappar med `data-color` och klasser
       - köp-knapp:
         - `<button class="kop-knapp-klader">Köp</button>`
     - anropa:
       - `applyStockStatus(card, product)` → ändra knapp om ej i lager
       - `applySizeAvailability(card, product)` → streck + disable på storlekar som saknas
       - `setupColorImageSwitcher(card, product)` → byt bild när färg klickas
     - lägg `card` i wrapper och `return wrapper`


3. Skapa `produkter.js` (”API”-lagret)
   - importera `Product` och `ProductCard`
   - hämta `const container = document.getElementById("product-list");`
   - `fetch("./assets/products-data.json")`
     - `res.json()`
     - plocka ut `data.products`
     - för varje objekt:
       - `const product = new Product(p);`
       - `const card = new ProductCard(product).render();`
       - `container.appendChild(card);`
     - hantera `.catch(...)` om något går fel

4. Skapa hjälpfiler (egna moduler)
   - `calculateDiscountPrice.js`
     - tar `product`
     - om `discountPercent > 0`:
       - räkna ut nytt pris
       - returnera rabattpris
     - annars: returnera `basePrice`
   - `stockStatus.js`
     - tar `cardElement` och `product`
     - hitta köp-knappen
     - om `inStock === false`:
       - ändra text till "Ej i lager"
       - `disabled = true`
       - lägg till klass för disabled-stil
   - `sizeAvailability.js`
     - tar `cardElement` och `product`
     - hitta alla `.size-btn`
     - jämför varje knappstorlek med `product.sizes`
     - storlekar som inte finns:
       - lägg till klass `.size-unavailable`
       - `disabled = true`
   - `colorImageSwitcher.js`
     - tar `cardElement` och `product`
     - hitta `.bild-klader img` + alla `.farg-btn`
     - vid klick:
       - läs `data-color`
       - bygg nytt filnamn baserat på ursprungsbild + färg
       - uppdatera `img.src` och `img.alt`

5. Testa
   - ladda `produkter.html` i browsern
   - kontrollera:
     - alla produkter visas
     - rabatt visas korrekt med badge
     - produkter utan lager har "Ej i lager"-knapp
     - storlekar som saknas har röd streck + går inte klicka
     - färgknappar byter bild utan hårdkodade paths
