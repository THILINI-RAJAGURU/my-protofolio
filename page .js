// Function to scroll to blog section when "View All" button is clicked
function viewAll() {
  const blogSection = document.querySelector('.blog-section');
  if (blogSection) {
    blogSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Optional: Navbar link highlight on scroll (if you use sections with IDs)
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar nav ul li a");

  let currentSection = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});
