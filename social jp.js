// Optional: Alert user when a social icon is clicked
document.querySelectorAll('.social-icons a').forEach(link => {
  link.addEventListener('click', function (e) {
    alert("Redirecting to social media profile...");
  });
});
