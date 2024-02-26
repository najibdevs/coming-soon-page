document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('emailInput');
    const emailBtn = document.getElementById('emailBtn');

    // Function to check if the email is valid
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Event listener for email input changes
    emailInput.addEventListener('input', function() {
        const isValid = validateEmail(emailInput.value);

        if (isValid) {
            emailInput.style.border = '2px solid green';
        } else {
            emailInput.style.border = '2px solid red';
        }
    });

    // Optional: Add click event listener to button for additional validation
    emailBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent form submission for demonstration
        const isValid = validateEmail(emailInput.value);

        if (!isValid) {
            alert('Please enter a valid email address.');
            emailInput.style.borderColor = 'red';
        } else {
            // Perform your subscription logic here
            alert('Thank you for subscribing!');
        }
    });
});