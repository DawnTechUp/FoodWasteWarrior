function calculateCatering() {
    <script>
    function calculateCatering() {
        const noOption = document.getElementById("noOption");

        // Check if the "No" option is selected
        if (noOption.checked) {
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
    
    // Variables based on existing data
    let currentCateredPortions = 18;
    let currentTotalCost = 360;
    let currentCostSavings = 40;
    const perPersonCost = 20;

    const lunchSelection = document.querySelector('input[name="lunch"]:checked');
    if (lunchSelection && lunchSelection.value === "no") {
        // User is not having lunch, adjust cost savings and display results
        currentCostSavings += 20; // Increase savings by one person's cost
        // document.getElementById("result").innerHTML = `
        //     <p>Total catered portions: ${currentCateredPortions}</p>
        //     <p>Total cost: $${currentTotalCost}</p>
        //     <p>Cost savings: $${currentCostSavings}</p>
        // `;
        // return; // Exit the function as no further calculation is needed
    }
    
    // Track if the current user should be counted as a full portion
    let userIsFullPortion = false;

    // Get all selected radio buttons for the user's choices
    const portionSelections = document.querySelectorAll('input[type="radio"]:checked');

    // Check each selected portion
    portionSelections.forEach(selection => {
        // If user selects 1/2 or 1 portion for any item, mark as full portion
        if (selection.value === "1/2" || selection.value === "1") {
            userIsFullPortion = true;
        }
    });

    // Calculate new totals based on the user's portion choices
    if (userIsFullPortion) {
        // User is counted as an additional portion
        currentCateredPortions += 1;
        currentTotalCost += perPersonCost;
        // Cost savings remain unchanged
    } else {
        // User is not counted as an additional portion
        currentCostSavings += 20; // Increase savings by one person's cost
    }


    localStorage.setItem("cateredPortions", currentCateredPortions);
    localStorage.setItem("totalCost", currentTotalCost);
    localStorage.setItem("costSavings", currentCostSavings);
    window.location.href = "/thankyou.html";
}
