function calculateCatering() {
    const noOption = document.getElementById("noOption");

    // Check if the "No" option is selected
    if (noOption && noOption.checked) {
        // Set the default values if the user is not having lunch
        const totalPortions = 18;
        const totalCost = 360; // $20 per portion * 18 portions
        const costSavings = 60; // Assuming this is the cost savings when catering 18 portions

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

    localStorage.setItem("cateredPortions", currentCateredPortions);
    localStorage.setItem("totalCost", currentTotalCost);
    localStorage.setItem("costSavings", currentCostSavings);

    window.location.href = "thankyou.html";
}
