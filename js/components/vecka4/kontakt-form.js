document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("kontakt-form");
  const nameInput = document.getElementById("kontakt-namn");
  const messageInput = document.getElementById("kontakt-meddelande");
  const feedback = document.getElementById("kontakt-feedback");

  // input events
  nameInput.addEventListener("input", () => {
    console.log("Namn:", nameInput.value);
  });

  messageInput.addEventListener("input", () => {
    console.log("Meddelande:", messageInput.value);
  });

  // submit event
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    feedback.textContent = `Tack ${nameInput.value || "för ditt meddelande"}! Vi återkommer via e-post.`;

    form.reset();
  });
});
