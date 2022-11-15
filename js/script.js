const labels = document.querySelectorAll(".input label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letra, index) =>
        `<span style="transition-delay: ${index * 50}ms">${letra}</span>`
    )
    .join("");
});
