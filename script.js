// Get form elements
const form = document.getElementById("contactForm");
const confirmationMessage = document.getElementById("confirmationMessage");

// Add submit event listener
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validate inputs (basic example)
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Use mailto to simulate sending an email
    const mailtoLink = `mailto:vladdd760@gmail.com?subject=Mensaje de ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0ADe: ${encodeURIComponent(email)}`;
    window.location.href = mailtoLink;

    // Show confirmation message
    confirmationMessage.style.display = "block";

    // Clear the form
    form.reset();
});