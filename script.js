function calculateBOP() {
    let teeth = document.getElementById("teeth").value;
    let bopSurfaces = document.getElementById("bopSurfaces").value;

    if (teeth <= 0) {
        alert("Enter a valid number of teeth!");
        return;
    }

    let totalSurfaces = teeth * 6;
    let bopPercentage = (bopSurfaces / totalSurfaces) * 100;

    document.getElementById("result").innerHTML = `BOP Percentage: ${bopPercentage.toFixed(2)}%`;
}
