document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Get input fields
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const subject = document.getElementById("subject");
      const message = document.getElementById("message");
  
      // Error display elements
      const errors = {
        name: document.getElementById("error-name"),
        email: document.getElementById("error-email"),
        subject: document.getElementById("error-subject"),
        message: document.getElementById("error-message"),
      };
  
      let isValid = true;
  
      // Reset all errors
      Object.values(errors).forEach((err) => (err.textContent = ""));
  
      // Validate Name
      if (!name.value.trim()) {
        errors.name.textContent = "Full name is required.";
        name.setAttribute("aria-describedby", "error-name");
        isValid = false;
      }
  
      // Validate Email
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.value.trim()) {
        errors.email.textContent = "Email is required.";
        email.setAttribute("aria-describedby", "error-email");
        isValid = false;
      } else if (!emailPattern.test(email.value)) {
        errors.email.textContent = "Please enter a valid email address.";
        email.setAttribute("aria-describedby", "error-email");
        isValid = false;
      }
  
      // Validate Subject
      if (!subject.value.trim()) {
        errors.subject.textContent = "Subject is required.";
        subject.setAttribute("aria-describedby", "error-subject");
        isValid = false;
      }
  
      // Validate Message
      if (!message.value.trim()) {
        errors.message.textContent = "Message is required.";
        message.setAttribute("aria-describedby", "error-message");
        isValid = false;
      } else if (message.value.trim().length < 10) {
        errors.message.textContent = "Message must be at least 10 characters.";
        message.setAttribute("aria-describedby", "error-message");
        isValid = false;
      }
  
      // Show success message if valid
      if (isValid) {
        successMessage.style.display = "block";
        form.reset();
      } else {
        successMessage.style.display = "none";
      }
    });
  });
  