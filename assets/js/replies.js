document.querySelectorAll(".more-replies").forEach(button => {
  button.addEventListener("click", () => {
    const replies = button.nextElementSibling;
    const isOpen = !replies.hasAttribute("hidden");

    replies.toggleAttribute("hidden");
    button.textContent = isOpen ? "More replies" : "Hide replies";
  });
});
