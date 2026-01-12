document.addEventListener("DOMContentLoaded", () => {
  const logoButton = document.getElementById("logoButton");

  // Optional: hide until user scrolls down 300px
  logoButton.style.display = "none";

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      logoButton.style.display = "flex";
    } else {
      logoButton.style.display = "none";
    }
  });

  // Scroll to top when clicked
  logoButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});