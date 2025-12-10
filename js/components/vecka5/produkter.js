import { Product } from "./ProductClass.js";
import { ProductCard } from "./ProductCard.js";

const container = document.getElementById("product-list");

fetch("./assets/products-data.json")
  .then((res) => res.json())
  .then((data) => {
    const products = data.products;

    products.forEach((p) => {
      const product = new Product(p);
      const card = new ProductCard(product).render();
      container.appendChild(card);
    });
  })
  .catch((err) => {
    console.error("Fel vid hämtning av produkter:", err);
  });
