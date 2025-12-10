export function calculateDiscountPrice(product) {
  const { basePrice, discountPercent } = product;

  if (!discountPercent || discountPercent <= 0) {
    return basePrice;
  }

  const discount = (basePrice * discountPercent) / 100;
  return Math.round(basePrice - discount);
}
