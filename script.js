// Function to display a loading spinner
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

// Function to handle "No" option for lunch
function calculateCatering() {
    const yesOption = document.querySelector('input[name="lunch"][value="yes"]');
    const noOption = document.querySelector('input[name="lunch"][value="no"]');

    // Check if neither "Yes" nor "No" option is selected
    if (!yesOption.checked && !noOption.checked) {
        alert("Please select either 'Yes' or 'No' for the buffet option.");
        return;
    }

    // If "No" option is selected, confirm with the user
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

    showLoadingSpinner();
    setTimeout(() => {
        window.location.href = "thankyou.html";
    }, 1000); // Adding a delay to allow the spinner to appear
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

    showLoadingSpinner();
    setTimeout(() => {
        window.location.href = "thankyou.html";
    }, 1000); // Adding a delay to allow the spinner to appear
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

    showLoadingSpinner();
    setTimeout(() => {
        window.location.href = "thankyou.html";
    }, 1000); // Adding a delay to allow the spinner to appear
}

// CSS for loading spinner animation
const spinnerStyle = document.createElement("style");
spinnerStyle.innerHTML = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(spinnerStyle);
