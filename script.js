// Function to show a loading spinner
function showLoadingSpinner() {
    const spinner = document.createElement("div");
    spinner.id = "loadingSpinner";
    spinner.style.position = "fixed";
    spinner.style.top = "50%";
    spinner.style.left = "50%";
    spinner.style.transform = "translate(-50%, -50%)";
    spinner.style.border = "8px solid #f3f3f3";
    spinner.style.borderTop = "8px solid #4b8a35";
    spinner.style.borderRadius = "50%";
    spinner.style.width = "50px";
    spinner.style.height = "50px";
    spinner.style.animation = "spin 1s linear infinite";
    document.body.appendChild(spinner);
}

// Function to remove the loading spinner
function removeLoadingSpinner() {
    const spinner = document.getElementById("loadingSpinner");
    if (spinner) spinner.remove();
}

// Function to calculate and redirect for "Allergies" option
function calculateAllergies() {
    const totalPortions = 18;
    const totalCost = 360; // $20 per portion * 18 portions
    const costSavings = 60;
    const portionsSaved = 4; // Fixed value for 18 portions

    localStorage.setItem("cateredPortions", totalPortions);
    localStorage.setItem("totalCost", totalCost);
    localStorage.setItem("costSavings", costSavings);
    localStorage.setItem("portionsSaved", portionsSaved);

    showLoadingSpinner();
    setTimeout(() => {
        window.location.href = "thankyou.html";
    }, 1000); // Adding a delay to allow the spinner to appear
}

// Function to calculate and redirect for "Vegetarian" option
function calculateVegetarian() {
    const totalPortions = 18;
    const totalCost = 360; // $20 per portion * 18 portions
    const costSavings = 60;
    const portionsSaved = 4; // Fixed value for 18 portions

    localStorage.setItem("cateredPortions", totalPortions);
    localStorage.setItem("totalCost", totalCost);
    localStorage.setItem("costSavings", costSavings);
    localStorage.setItem("portionsSaved", portionsSaved);

    showLoadingSpinner();
    setTimeout(() => {
        window.location.href = "thankyou.html";
    }, 1000); // Adding a delay to allow the spinner to appear
}

// Function to handle special meal confirmations
function confirmSpecialMeal() {
    const vegetarianOption = document.querySelector('input[name="diet"][value="vegetarian"]');
    const allergiesInput = document.getElementById("allergiesInput");

    vegetarianOption.addEventListener("change", function() {
        if (vegetarianOption.checked) {
            const confirmVegetarian = confirm("You selected 'Vegetarian'. Please confirm if this is correct. A separate bento box will be issued for your meal.");
            if (confirmVegetarian) {
                calculateVegetarian(); // Redirect on confirmation
            } else {
                vegetarianOption.checked = false;
            }
        }
    });

    // Event listener for when the user presses "Enter" after typing allergies
    allergiesInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent form submission or default actions
            const allergyDetails = allergiesInput.value.trim();
            if (allergyDetails) { // Check if the allergies input has any text
                const confirmAllergy = confirm("You entered allergies: '" + allergyDetails + "'. Please confirm if this is correct. A separate bento box will be issued for your meal.");
                if (confirmAllergy) {
                    calculateAllergies(); // Redirect on confirmation
                } else {
                    allergiesInput.value = ""; // Clear input if not confirmed
                }
            } else {
                alert("Please specify your allergies before pressing Enter.");
            }
        }
    });
}

// Function to handle "No" option for lunch and redirect if selected
function calculateCatering() {
    const yesOption = document.querySelector('input[name="lunch"][value="yes"]');
    const noOption = document.querySelector('input[name="lunch"][value="no"]');

    // Check if neither "Yes" nor "No" option is selected
    if (!yesOption.checked && !noOption.checked) {
        alert("Please select either 'Yes' or 'No' for the buffet option.");
        return;
    }

    // If "No" option is selected, confirm with the user and proceed without portions or dietary selections
    if (noOption.checked) {
        const confirmNoLunch = confirm("You selected 'No' for lunch. Are you sure?");
        if (!confirmNoLunch) return;

        const totalPortions = 18;
        const totalCost = 360; // $20 per portion * 18 portions
        const costSavings = 60;
        const portionsSaved = 22 - totalPortions; // Calculated as 4 when totalPortions is 18

        localStorage.setItem("cateredPortions", totalPortions);
        localStorage.setItem("totalCost", totalCost);
        localStorage.setItem("costSavings", costSavings);
        localStorage.setItem("portionsSaved", portionsSaved);

        showLoadingSpinner();
        setTimeout(() => {
            window.location.href = "thankyou.html";
        }, 1000); // Adding a delay to allow the spinner to appear
        return;
    }

    // Check if the user selected portions if they chose "Yes"
    const portionSelections = document.querySelectorAll('.food-portion-table input[type="radio"]:checked');
    if (portionSelections.length === 0) {
        alert("Please select your portion preferences before proceeding.");
        return;
    }

    // Additional calculations if the user is having lunch
    let currentCateredPortions = 18;
    let currentTotalCost = 360;
    let currentCostSavings = 40;
    const perPersonCost = 20;

    let userIsFullPortion = false;

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

    // Calculate portions saved based on currentCateredPortions
    let portionsSaved;
    if (currentCateredPortions === 18) {
        portionsSaved = 4;
    } else if (currentCateredPortions === 19) {
        portionsSaved = 3;
    } else {
        portionsSaved = 22 - currentCateredPortions;
    }

    localStorage.setItem("cateredPortions", currentCateredPortions);
    localStorage.setItem("totalCost", currentTotalCost);
    localStorage.setItem("costSavings", currentCostSavings);
    localStorage.setItem("portionsSaved", portionsSaved);

    showLoadingSpinner();
    setTimeout(() => {
        window.location.href = "thankyou.html";
    }, 1000); // Adding a delay to allow the spinner to appear
}

// Initialize the special meal confirmation when the page loads
document.addEventListener("DOMContentLoaded", confirmSpecialMeal);
