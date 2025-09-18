// Highlights selected page - User feedback
document.addEventListener("DOMContentLoaded", () => {
  const current = location.pathname.split("/").pop();
  const links = document.querySelectorAll(".navbar ul li a");

  links.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
});
