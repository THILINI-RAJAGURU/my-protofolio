// Initialize AOS (Animate On Scroll) animations
AOS.init({
  duration: 1000,  // Animation duration
  once: true,      // Animation occurs only once
});

// Scroll-to-top button functionality
document.addEventListener("DOMContentLoaded", function () {
  // Create the button element
  let scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.classList.add("scroll-to-top");
  scrollToTopBtn.innerHTML = "<i class='fas fa-arrow-up'></i>";
  document.body.appendChild(scrollToTopBtn);

  // Show button when user scrolls down 300px from the top
  window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Smooth scroll back to top when the button is clicked
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
