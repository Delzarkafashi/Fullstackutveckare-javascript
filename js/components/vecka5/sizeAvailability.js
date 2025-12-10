export function applySizeAvailability(cardElement, product) {
  const sizeButtons = cardElement.querySelectorAll(".size-btn");
  if (!sizeButtons.length) return;

  sizeButtons.forEach((btn) => {
    const btnSize = btn.dataset.size;

    // finns denna storlek i produktens sizes?
    const available = product.sizes.includes(btnSize);

    if (!available) {
      btn.classList.add("size-unavailable");
      btn.disabled = true;
    }
  });
}
