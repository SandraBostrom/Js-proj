function imageGallery() {
  const highlight = document.querySelector(".gallery-highlight");
  const previews = document.querySelectorAll(".pet-preview img");

  previews.forEach((preview) => {
    preview.addEventListener("click", function () {
      const smallSrc = this.src;
      const bigSrc = smallSrc.replace("small", "big");
      highlight.src = bigSrc;
      preview.forEach((preview) => preview.classList.remove("pet-active"));
      preview.classList.add("pet-active");
    });
  });
}
imageGallery();
