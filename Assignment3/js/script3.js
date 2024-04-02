// LINGA SAI SRILAXMI N01653528
document.addEventListener("DOMContentLoaded", function() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression pattern for email validation

    // Move focus to the "Arrival date" text box
    document.getElementById("Arrivaldate").focus();

    // Event handler for form submission
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form inputs
        const arrivalDate = document.getElementById("Arrivaldate").value.trim();
        const nights = document.getElementById("nights").value.trim();
        const email = document.getElementById("email").value.trim();

        // Validate inputs
        if (arrivalDate === "" || isNaN(new Date(arrivalDate).getTime())) {
            alert("Please enter a valid arrival date.");
            return;
        }

        if (nights === "" || isNaN(nights)) {
            alert("Please enter a valid number of nights.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // If all inputs are valid, submit the form
        alert("Form submitted successfully!");
        this.submit();
    });
});
