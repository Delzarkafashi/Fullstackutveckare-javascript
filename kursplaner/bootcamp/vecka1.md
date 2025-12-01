# Vecka 1 – HTML grunder + layoutstart

## Vad ska vi gör
- Skapa ett nytt projekt med index.html och style.css
- Bygga grundstrukturen:
  - `header`
  - `main`
  - `footer`
- låta `header`, `main` och `footer` växa om innehållet blir större
- Lägga allt i en enkel grid-layout (3 rader: header / main / footer)
- Använda enkla färger för att markera ytorna
- Ge olika bakgrundsfärg till header, main, footer och boxarna i header för att tydligt se layouten
- Testa flexbox i header: dela upp header i flera divar/sektioner (logo, sökfält, meny, logga in / sign up och dark-mode knapp) och bara lägga in tomma element utan funktion.
- Testa CSS grid i footer: dela upp footern i flera kolumner (t.ex. kontakt, sociala medier, hjälp & info) och lägg in tomma rubriker/länkar utan funktion.
- Använda `:root` för att skapa enkla färgvariabler (t.ex. `--bg`, `--surface`, `--card`, `--fg`) och använda dem för bakgrund och text i `body`, `header`, `main` och `footer`.
- Göra en enkel responsiv anpassning med media queries (t.ex. flytta om boxarna i header).

---

## Hur man ska tänka
- Fokus är att förstå **struktur**, inte design.
- Tänk: “Var ska saker ligga?” inte “Hur ska det se ut?”
- Header, main och footer ska kännas som “lådor” du placerar ut.
- Det spelar ingen roll om det ser fult ut i början – bara att layouten fungerar.

---

## Pseudokod – Vecka 1
1. Skapa mapp för projektet
2. Skapa filerna: index.html och style.css
3. I HTML:
   - lägg till wrapper-div
   - lägg till `header`, `main`, `footer` inuti
4. I CSS:
   - gör `body` helsida
   - definiera färgvariabler i `:root` (t.ex. `--bg`, `--surface`, `--card`, `--fg`)
   - gör wrapper till grid med 3 rader (header / main / footer)
   - sätt `min-height: 150px` på `header`
   - sätt `min-height: 800px` på `main`
   - sätt `min-height: 150px` på `footer`
   - ge olika background-color till `header`, `main`, `footer` och boxarna i header
   - lägga till en enkel media query för mobil (t.ex. max-width: 600px) och justera layouten lite.
5. I header:
   - lägg tom logo-box
   - lägg tom sök-box
   - lägg tom meny-box
   - lägg tom login-box
   - lägg tom darkmode-box
   - använd flexbox för att rada upp boxarna
6. I footer:
   - gör grid med 3 kolumner
   - lägg tomma rubriker för kontakt, sociala medier, hjälp & info
