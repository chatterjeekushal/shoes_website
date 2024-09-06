document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Clear previous error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.remove());

    // Collect form data
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const companyName = document.getElementById('companyName').value.trim();
    const address = document.getElementById('address').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const terms = document.getElementById('terms').checked;

    let valid = true;

    // Validate inputs
    if (!firstName) {
      showError('firstName', 'First name is required');
      valid = false;
    }

    if (!lastName) {
      showError('lastName', 'Last name is required');
      valid = false;
    }

    if (!companyName) {
      showError('companyName', 'Company name is required');
      valid = false;
    }

    if (!address) {
      showError('address', 'Address is required');
      valid = false;
    }

    if (!email || !validateEmail(email)) {
      showError('email', 'Valid email is required');
      valid = false;
    }

    if (!phone || isNaN(phone)) {
      showError('phone', 'Valid phone number is required');
      valid = false;
    }

    if (!message) {
      showError('message', 'Additional information is required');
      valid = false;
    }

    if (!terms) {
      showError('terms', 'You must accept the terms and conditions');
      valid = false;
    }

    // If all fields are valid, submit the form (you can also send the data via AJAX here)
    if (valid) {
      // Here you can submit the form or handle the data
      alert('Form submitted successfully');
    }
  });

  function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message text-danger';
    errorMessage.textContent = message;
    field.parentNode.appendChild(errorMessage);
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
