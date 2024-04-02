// LINGA SAI SRILAXMI N01653528
// Shorthand for document.querySelector
function $(selector) {
    return document.querySelector(selector);
}

document.addEventListener("DOMContentLoaded", function () {
    // Event handler for the Calculate button
    $("#Calculate").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission or page refresh
        processEntry();
    });
});

// Function to process the user's entry
function processEntry() {
    var amount = parseInt($("#amount").value);
    if (!isNaN(amount) && amount >= 0 && amount <= 99) {
        makeChange(amount);
    } else {
        alert("Please enter a valid number between 0 and 99.");
    }
}

// Function to calculate the change
function makeChange(amount) {
    var Quarters = Math.floor(amount / 25);
    amount %= 25;
    var Dimes = Math.floor(amount / 10);
    amount %= 10;
    var Nickels = Math.floor(amount / 5);
    var Pennies = amount % 5;

    // Display the results
    $("#Quarters").value = Quarters;
    $("#Dimes").value = Dimes;
    $("#Nickels").value = Nickels;
    $("#Pennies").value = Pennies;
}
