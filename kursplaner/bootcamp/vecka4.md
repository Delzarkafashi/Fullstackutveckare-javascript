# Vecka 4 — DOM & events + interaktiv produkt & kontaktformulär

I vecka 4 gör vi våra första interaktiva funktioner med JavaScript.  
Vi använder DOM-manipulation och events för att göra produktsidan och kontaktsidan mer levande.

---

## Vad ska vi göra

- Hämta element från DOM med `querySelector` och liknande.
- Byta produktbild när man klickar på färgknapparna på vinterstövel-kortet.
- Visa en enkel köp-popup när man klickar på **Köp**.
- Stänga popupen med en knapp (ta bort elementet).
- Skapa ett kontaktformulär på kontaktsidan med:
  - namn, e-post, meddelande
  - live-validering (`input`-event)
  - `submit`-event som stoppar sidladdning och visar en bekräftelse.
- Fortsätta träna på:
  - DOM-manipulation (text, attribut, klasser, skapa/ta bort element)
  - events: `click`, `input`, `submit`.

---

## Hur man ska tänka

- DOM är kopplingen mellan HTML och JavaScript:  
  vi **hämtar** element → **lyssnar** på events → **ändrar** HTML.
- Tänk: ”Vad ska hända **när användaren klickar/skriv­er/skickar**?”  
  Skriv en funktion som bara gör det.
- Produktkortet från vecka 3 är vår scen – nu gör vi den **interaktiv**:
  - färgknapparna styr vilken bild som visas
  - köp-knappen visar en enkel popup.
- Kontaktformuläret tränar input och submit:
  - visa felmeddelanden direkt
  - stoppa submit med `event.preventDefault()`
  - visa bekräftelsemeddelande på sidan.
- Håll funktionerna små:
  - bytBild()
  - öppnaPopup()
  - stängPopup()
  - hanteraFormular()
- Fokus: **event → funktion → uppdaterad DOM**.

---

## Pseudokod – Vecka 4

1. Skapa filen `js/components/vecka-4-interaktivt-kort.js`.
2. Hämta vinterstövel-kortet i DOM:
   - `const card = document.querySelector(".js-vinter-sko");`
   - om kortet inte finns → avbryt.
3. Hämta inre element:
   - `.bild-klader img`
   - `.produkt-farg .farg-btn`
   - `.kop-knapp-klader`
4. Byta bild vid färgklick:
   - läs vald färg från `data-color`
   - välj rätt bild:
     - röd → `"assets/images/Vinterstövlar röda.png"`
     - svart → `"assets/images/Vinterstövlar svart.png"`
     - vit → `"assets/images/Vinterstövlar vit.png"`
   - uppdatera `img.src` och `img.alt`
5. Skapa köp-popup:
   - lyssna på klick på köp-knappen
   - skapa overlay-div `.buy-overlay`
   - lägg in text + stäng-knapp
   - `document.body.appendChild(overlay)`
6. Stäng popup:
   - lyssna på stäng-knappen
   - `overlay.remove()`
7. Skapa filen `js/kontakt-form.js`
8. Hämta formuläret och fälten:
   - namn, e-post, meddelande
   - plats för felmeddelanden + bekräftelse
9. Lägg till `input`-events:
   - tomt fält → visa fel
   - ifyllt → ta bort fel
10. Lägg till `submit`-event:
    - `event.preventDefault()`
    - kontrollera:
      - alla fält ifyllda
      - e-post innehåller `@`
    - visa bekräftelsemeddelande
    - `form.reset()`
11. Testa:
    - produktkort: färgbyte + popup
    - kontaktformulär: input-validering + submit-bekräftelse
