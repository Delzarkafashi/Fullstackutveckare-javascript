const vinterSko2 = {
  id: "vinter-sko-2",
  name: "Vinterstövlar",
  category: "sko",
  season: "vinter",
  colors: ["röd", "svart", "vit"],
  sizes: ["S", "M", "L"],
  basePrice: 749,
  discountPercent: 10,
  image: "assets/images/Vinterstövlar vit.png",
  inStock: true
};

// Funktion – räkna ut pris med rabatt
function calcDiscountPrice(product) {
  const rabatt = product.basePrice * (product.discountPercent / 100);
  return Math.round(product.basePrice - rabatt);
}

document.addEventListener("DOMContentLoaded", () => {
  // 3. Variabler + datatyper
  let price = vinterSko2.basePrice;
  let name = vinterSko2.name;
  let inStock = vinterSko2.inStock;

  console.log("Namn:", name);
  console.log("Ordinarie pris:", price);
  console.log("Finns i lager:", inStock);

  // 4. If/else
  if (inStock) {
    console.log("Produkten finns i lager.");
  } else {
    console.log("Produkten är slut i lager.");
  }

  // 5. Loopar – skriv ut storlekar och färger
  for (let size of vinterSko2.sizes) {
    console.log("Storlek:", size);
  }

  for (let color of vinterSko2.colors) {
    console.log("Färg:", color);
  }

  // 6. Använd funktionen för att få rabattpris
  const discountedPrice = calcDiscountPrice(vinterSko2);

  // 7. Koppla till rätt kort i DOM:en
  const card = document.querySelector(".js-vinter-sko");
  if (!card) return;

  const titleEl = card.querySelector(".titel-klader");
  const imgEl   = card.querySelector(".bild-klader img");
  const priceEl = card.querySelector(".pris-klader");
  const descEl  = card.querySelector(".beskrivning-klader");
  const buyBtn  = card.querySelector(".kop-knapp-klader");
  const imageBox = card.querySelector(".bild-klader");

  if (titleEl) titleEl.textContent = name;

  if (imgEl) {
    imgEl.src = vinterSko2.image;
    imgEl.alt = name;
  }

  if (descEl) {
    descEl.textContent = "Varma vinterstövlar med bra grepp för kalla dagar.";
  }

  // visa pris (original + rabatt om det finns rabatt)
  if (priceEl) {
    if (vinterSko2.discountPercent > 0) {
      priceEl.innerHTML = `
        <span class="original-price">${vinterSko2.basePrice} kr</span>
        <span class="discounted-price">${discountedPrice} kr</span>
      `;
    } else {
      priceEl.textContent = vinterSko2.basePrice + " kr";
    }
  }

  // skapa rabatt-badge på bilden
  if (imageBox && vinterSko2.discountPercent > 0) {
    const badge = document.createElement("div");
    badge.className = "discount-badge";
    badge.innerHTML = `<span class="badge-minus">-</span>${vinterSko2.discountPercent}%`;
    imageBox.appendChild(badge);
  }

  if (buyBtn) {
    buyBtn.setAttribute(
      "aria-label",
      `Köp ${name} för ${discountedPrice} kronor`
    );
  }

  card.setAttribute("aria-label", `Produkt ${name}`);
});
