// Function to handle "No" option for lunch
function calculateCatering() {
    const noOption = document.getElementById("noOption");

    // Check if the "No" option is selected
    if (noOption && noOption.checked) {
        const totalPortions = 18;
        const totalCost = 360; // $20 per portion * 18 portions
        const costSavings = 60;
        const portionsSaved = 22 - totalPortions; // Calculated as 4 when totalPortions is 18

        localStorage.setItem("cateredPortions", totalPortions);
        localStorage.setItem("totalCost", totalCost);
        localStorage.setItem("costSavings", costSavings);
        localStorage.setItem("portionsSaved", portionsSaved);

        window.location.href = "thankyou.html";
        return;
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

    window.location.href = "thankyou.html";
}

// Function to handle "Vegetarian" option
function calculateVegetarian() {
    const totalPortions = 18;
    const totalCost = 360; // $20 per portion * 18 portions
    const costSavings = 60;
    const portionsSaved = 4; // Fixed value for 18 portions

    localStorage.setItem("cateredPortions", totalPortions);
    localStorage.setItem("totalCost", totalCost);
    localStorage.setItem("costSavings", costSavings);
    localStorage.setItem("portionsSaved", portionsSaved);

    window.location.href = "thankyou.html";
}

// Function to handle "Allergies" option selection
function handleAllergiesSelection() {
    const allergiesInput = document.getElementById("allergiesInput");

    allergiesInput.focus();

    allergiesInput.addEventListener("keydown", function onEnter(event) {
        if (event.key === "Enter") {
            allergiesInput.removeEventListener("keydown", onEnter);
            calculateAllergies();
        }
    });
}

// Function to calculate values and redirect for "Allergies" option
function calculateAllergies() {
    const totalPortions = 18;
    const totalCost = 360; // $20 per portion * 18 portions
    const costSavings = 60;
    const portionsSaved = 4; // Fixed value for 18 portions

    localStorage.setItem("cateredPortions", totalPortions);
    localStorage.setItem("totalCost", totalCost);
    localStorage.setItem("costSavings", costSavings);
    localStorage.setItem("portionsSaved", portionsSaved);

    window.location.href = "thankyou.html";
}
