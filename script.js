const rockSelect = document.querySelector(".rock"); 
const message = document.querySelector(".message")

rockSelect.addEventListener("change", setRock);

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    message.appendChild(img);
}

function setRock() {
    const rockChoice = rockSelect.value;

    if (rockChoice === "sodalite") {
        message.textContent = 
        "You feel like a whole being whose air is dispersed evenly.";
        show_image('./images/rocks/sodalite.jpg', 200, 200, 'Sodalite');
    } else {
        message.textContent =
        "";
    }
}