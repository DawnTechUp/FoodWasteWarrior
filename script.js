// Function to handle "No" option for lunch
function calculateCatering() {
    console.log("Calculating");

    const noOption = document.getElementById("noOption");

    // Check if the "No" option is selected
    if (noOption && noOption.checked) {
        // Set default values if the user is not having lunch
        const totalPortions = 18;
        const totalCost = 360; // $20 per portion * 18 portions
        const costSavings = 60;

        // Store these values in localStorage for the Thank You page
        localStorage.setItem("cateredPortions", totalPortions);
        localStorage.setItem("totalCost", totalCost);
        localStorage.setItem("costSavings", costSavings);

        // Redirect to the Thank You page
        window.location.href = "thankyou.html";
        return; // Exit the function
    }

    // Additional calculations if the user is having lunch
    let currentCateredPortions = 18;
    let currentTotalCost = 360;
    let currentCostSavings = 40;
    const perPersonCost = 20;

    let userIsFullPortion = false;
    const portionSelections = document.querySelectorAll('input[type="radio"]:checked');

    portionSelections.forEach(selection => {
        if (selection.value === "1/2" || selection.value === "1") {
            userIsFullPortion = true;
        }
    });

    if (userIsFullPortion) {
        currentCateredPortions += 1;
        currentTotalCost += perPersonCost;
    } else {
        currentCostSavings += 20;
    }

    // Store updated values in localStorage for the Thank You page
    localStorage.setItem("cateredPortions", currentCateredPortions);
    localStorage.setItem("totalCost", currentTotalCost);
    localStorage.setItem("costSavings", currentCostSavings);

    // Redirect to the Thank You page
    window.location.href = "thankyou.html";
}

// Separate function to handle "Vegetarian" option
function calculateVegetarian() {
    console.log("Vegetarian option selected");

    const totalPortions = 18;
    const totalCost = 360; // $20 per portion * 18 portions
    const costSavings = 60;

    // Store these values in localStorage for the Thank You page
    localStorage.setItem("cateredPortions", totalPortions);
    localStorage.setItem("totalCost", totalCost);
    localStorage.setItem("costSavings", costSavings);

    // Redirect to the Thank You page
    window.location.href = "thankyou.html";
}

// Function to handle "Allergies" option selection
function handleAllergiesSelection() {
    const allergiesInput = document.getElementById("allergiesInput");

    // Focus on the input field to prompt the user to enter their allergies
    allergiesInput.focus();

    // Listen for the "Enter" key to be pressed in the input field
    allergiesInput.addEventListener("keydown", function onEnter(event) {
        if (event.key === "Enter") {
            // Remove the event listener after the user presses Enter
            allergiesInput.removeEventListener("keydown", onEnter);

            // Call the calculateAllergies function to handle redirection and calculations
            calculateAllergies();
        }
    });
}

// Function to calculate values and redirect for "Allergies" option
function calculateAllergies() {
    console.log("Allergies option selected");

    const totalPortions = 18;
    const totalCost = 360; // $20 per portion * 18 portions
    const costSavings = 60;

    // Store these values in localStorage for the Thank You page
    localStorage.setItem("cateredPortions", totalPortions);
    localStorage.setItem("totalCost", totalCost);
    localStorage.setItem("costSavings", costSavings);

    // Redirect to the Thank You page
    window.location.href = "thankyou.html";
}

