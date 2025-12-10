import { Product } from "./ProductClass.js";
import { calculateDiscountPrice } from "./calculateDiscountPrice.js";
import { setupColorImageSwitcher } from "./colorImageSwitcher.js";
import { applyStockStatus } from "./stockStatus.js";
import { applySizeAvailability } from "./sizeAvailability.js";


export class ProductCard {
  constructor(product) {
    if (!(product instanceof Product)) {
      throw new Error("ProductCard behöver ett Product-objekt");
    }
    this.product = product;
  }

  render() {
    // wrapper runt kortet
    const wrapper = document.createElement("div");
    wrapper.className = "parent-klader";

    // själva kortet
    const card = document.createElement("section");
    card.className = "produkt-kort-klader";

    // titel
    const title = document.createElement("h3");
    title.className = "titel-klader";
    title.textContent = this.product.name;
    card.appendChild(title);

    // bild
    const bildWrapper = document.createElement("div");
    bildWrapper.className = "bild-klader";

    const img = document.createElement("img");
    img.src = this.product.image;
    img.alt = this.product.name;
    bildWrapper.appendChild(img);
    card.appendChild(bildWrapper);

// beskrivning
const desc = document.createElement("p");
desc.className = "beskrivning-klader";

// använd bara description
const fullDesc = (this.product.description || "").trim();

if (fullDesc) {
  const words = fullDesc.split(" ");
  const short = words.slice(0, 10).join(" "); // första 10 orden
  desc.textContent = words.length > 10 ? short + " ..." : fullDesc;
} else {
  desc.textContent = ""; // eller nån placeholder om du vill
}

card.appendChild(desc);



        // pris förre man koppla till fuc
// const price = document.createElement("div");
// price.className = "pris-klader";
// price.textContent = `${this.product.basePrice} kr`;
// card.appendChild(price);
    
        // pris + rabatt
    const discounted = calculateDiscountPrice(this.product);
    const price = document.createElement("div");
    price.className = "pris-klader";

    if (discounted !== this.product.basePrice) {
      // badge
      const badge = document.createElement("div");
      badge.className = "discount-badge";

      const badgeText = document.createElement("span");
      badgeText.className = "badge-minus";
      badgeText.textContent = `-${this.product.discountPercent}%`;
      badge.appendChild(badgeText);
      bildWrapper.appendChild(badge);

      // original + nytt pris
      const original = document.createElement("span");
      original.className = "original-price";
      original.textContent = `${this.product.basePrice} kr`;

      const discountedEl = document.createElement("span");
      discountedEl.className = "discounted-price";
      discountedEl.textContent = `${discounted} kr`;

      price.appendChild(original);
      price.appendChild(discountedEl);
    } else {
      price.textContent = `${this.product.basePrice} kr`;
    }

    card.appendChild(price);



    // storlekar
    const ALL_SIZES = ["S", "M", "L"];
    const sizeContainer = document.createElement("div");
    sizeContainer.className = "produkt-storlek";

    const sizeLabel = document.createElement("p");
    sizeLabel.className = "storlek-titel";
    sizeLabel.textContent = "Storlek:";
    sizeContainer.appendChild(sizeLabel);

    const sizeVal = document.createElement("div");
    sizeVal.className = "storlek-val";

    // visa ALLA storlekar (S–M–L)
    ALL_SIZES.forEach((size) => {
      const btn = document.createElement("button");
      btn.className = "size-btn";
      btn.dataset.size = size;
      btn.textContent = size;
      sizeVal.appendChild(btn);
    });

    sizeContainer.appendChild(sizeVal);
    card.appendChild(sizeContainer);

    // markera vilka som INTE finns i product.sizes
    applySizeAvailability(card, this.product);


    // färger
    const colorContainer = document.createElement("div");
    colorContainer.className = "produkt-farg";

    const colorLabel = document.createElement("p");
    colorLabel.className = "farg-titel";
    colorLabel.textContent = "Färg:";
    colorContainer.appendChild(colorLabel);

    const colorVal = document.createElement("div");
    colorVal.className = "farg-val";

    this.product.colors.forEach((color) => {
      const btn = document.createElement("button");
      btn.className = "farg-btn";
      btn.dataset.color = color;

      if (color === "röd") btn.classList.add("farg-rod");
      if (color === "svart") btn.classList.add("farg-svart");
      if (color === "vit") btn.classList.add("farg-vit");

      colorVal.appendChild(btn);
    });

    colorContainer.appendChild(colorVal);
    card.appendChild(colorContainer);

    // köp-knapp
    const buyBtn = document.createElement("button");
    buyBtn.className = "kop-knapp-klader";
    buyBtn.type = "button";
    buyBtn.textContent = "Köp";
    card.appendChild(buyBtn);

      // lager-logik (bara knapp)
    applyStockStatus(card, this.product);

    // koppla färg → bild här
    setupColorImageSwitcher(card, this.product);

    // lägg kortet i wrappern
    wrapper.appendChild(card);

    return wrapper;
  }
}
