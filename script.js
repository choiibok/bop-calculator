function calculateBOP() {
    let teeth = document.getElementById("teeth").value;
    let bopSurfaces = document.getElementById("bopSurfaces").value;
    let resultElement = document.getElementById("result");

    if (teeth <= 0 || isNaN(teeth)) {
        alert("Enter a valid number of teeth!");
        return;
    }

    let totalSurfaces = teeth * 6;
    let bopPercentage = (bopSurfaces / totalSurfaces) * 100;

    resultElement.innerHTML = `BOP Percentage: ${bopPercentage.toFixed(2)}%`;
    
    // Add class to make the result smoothly appear
    resultElement.classList.add("result-visible");
}
