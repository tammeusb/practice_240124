const rockSelect = document.querySelector(".rock"); 
const rockMessage = document.querySelector(".rockMessage")

rockSelect.addEventListener("change", setRock);

function setRock() {
    const rockChoice = rockSelect.value;

    if (rockChoice === "sodalite") {
        rockMessage.textContent = 
        "You feel like a whole being whose air is dispersed evenly.";
    } else {
        rockMessage.textContent =
        "";
    }
}