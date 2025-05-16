const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");

function showToast(message, color = "#333") {
  toast.textContent = message;
  toast.style.backgroundColor = color;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// Real-time Validation
function validateInput(input) {
  if (!input.value.trim()) {
    input.classList.remove("valid");
    input.classList.add("invalid");
    return false;
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
    return true;
  }
}

["name", "email", "message"].forEach((id) => {
  const input = document.getElementById(id);
  input.addEventListener("input", () => validateInput(input));
});

form.addEventListener("submit", function (e) {
  e.preventDefault();  // Prevent form from submitting normally

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const isValid =
    validateInput(name) && validateInput(email) && validateInput(message);

  if (isValid) {
    // Create a new FormData object and send it to PHP
    const formData = new FormData(form);
    
    fetch('send_email.php', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.text())
    .then(data => {
      if (data === 'success') {
        showToast("✅ Message sent successfully!", "#4caf50");
        form.reset();
        [name, email, message].forEach((el) => el.classList.remove("valid"));
      } else {
        showToast("❗Something went wrong. Please try again.", "#f44336");
      }
    })
    .catch(error => {
      showToast("❗An error occurred. Please try again later.", "#f44336");
    });
  } else {
    showToast("❗Please fill all fields correctly.", "#f44336");
  }
});
