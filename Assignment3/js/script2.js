// LINGA SAI SRILAXMI N01653528
// Enables strict mode to catch common coding mistakes and improve code quality

// Function to get element by ID
var $ = function (id) {
    return document.getElementById(id);
};

// Function to calculate income tax based on income amount
var calculateTax = function(amount) {
    var tax;
    if(amount > 0 && amount <= 9275){
        tax = amount * 0.10;
    }
    else if(amount > 9275 && amount <= 37650){
        amount = amount - 9275;
        tax = amount * 0.15;
        tax = tax + 927.50;
    }
    else if(amount > 37650 && amount <= 91150){
        amount = amount - 37650;
        tax = amount * 0.25;
        tax = tax + 5183.75;
    }
    else if(amount > 91150 && amount <= 190150){
        amount = amount - 91150;
        tax = amount * 0.28;
        tax = tax + 18558.75;
    }
    else if(amount > 190150 && amount <= 413350){
        amount = amount - 190150;
        tax = amount * 0.33;
        tax = tax + 46278.75;
    }
    else if(amount > 413350 && amount <= 415050){
        amount = amount - 413350;
        tax = amount * 0.35;
        tax = tax + 119934.75;
    }
    else if(amount > 415050){
        amount = amount - 415050;
        tax = amount * 0.396;
        tax = tax + 120529.75;
    }
    return tax;
};

// Function to process user input and calculate tax
var processEntry = function() {
    var income = parseInt($("income").value); // Get the value of income input and parse it to integer
    if (isNaN(income)){
        alert("Entry must be numeric"); // Display an alert if the entry is not numeric
    }
    else if(income <= 0 ){
        alert("The value of income must be greater than 0"); // Display an alert if income is less than or equal to 0
    }
    else{
        var tax = calculateTax(income); // Calculate tax based on income
        $("tax").value = tax.toFixed(2); // Display the calculated tax with 2 decimal places
        $("income").focus(); // Set focus back to the income input field
    }
};

// Function to set event handler for the calculate button and set focus on the income input field when the window loads
window.onload = function () {
    $("calculate").onclick = processEntry; // Set event handler for the calculate button
    $("income").focus(); // Set focus on the income input field when the window loads
}; 
