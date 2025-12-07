document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".js-vinter-sko");
  if (!card) return;

  const sizeButtons  = card.querySelectorAll(".size-btn");
  const colorButtons = card.querySelectorAll(".farg-btn");
  const buyBtn       = card.querySelector(".kop-knapp-klader");
  const imgEl        = card.querySelector(".bild-klader img");

  let selectedSize  = null;
  let selectedColor = null;
  let inCart = false;

  const colorImages = {
    röd:   "assets/images/Vinterstövlar röda.png",
    svart: "assets/images/Vinterstövlar svart.png",
    vit:   "assets/images/Vinterstövlar vit.png"
  };

  // Storlek
  sizeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedSize = btn.dataset.size || btn.textContent.trim();
      console.log("Vald storlek:", selectedSize);
    });
  });

  // Färg + byt bild
  colorButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedColor = btn.dataset.color || btn.getAttribute("data-color");
      console.log("Vald färg:", selectedColor);

      if (imgEl && colorImages[selectedColor]) {
        imgEl.src = colorImages[selectedColor];
        imgEl.alt = `Vinterstövlar ${selectedColor}`;
      }
    });
  });

  // Popup-overlay för "lagt i kundvagnen"
  const overlay = document.createElement("div");
  overlay.className = "cart-overlay hidden";
  overlay.innerHTML = `
    <div class="cart-dialog">
      <p class="cart-dialog-text"></p>
      <button type="button" class="cart-remove-btn">Ta bort</button>
    </div>
  `;
  document.body.appendChild(overlay);

  const dialogText = overlay.querySelector(".cart-dialog-text");
  const removeBtn  = overlay.querySelector(".cart-remove-btn");

  function showCartOverlay() {
    const sizeText  = selectedSize  ? `Storlek: ${selectedSize}.`  : "Ingen storlek vald.";
    const colorText = selectedColor ? `Färg: ${selectedColor}.` : "Ingen färg vald.";

    dialogText.textContent = `Lagd i kundvagnen (demo). ${sizeText} ${colorText}`;
    overlay.classList.remove("hidden");
    inCart = true;
  }

  function hideCartOverlay() {
    overlay.classList.add("hidden");
    inCart = false;
  }

  if (buyBtn) {
    buyBtn.addEventListener("click", () => {
      console.log("Köp klickad. Storlek:", selectedSize, "Färg:", selectedColor);
      showCartOverlay();
    });
  }

  if (removeBtn) {
    removeBtn.addEventListener("click", () => {
      console.log("Tog bort från kundvagnen (demo).");
      hideCartOverlay();
    });
  }

  // Stäng om man klickar utanför dialogen
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      hideCartOverlay();
    }
  });
});
