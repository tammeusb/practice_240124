const choice = document.querySelector(".choice"); 
const message = document.querySelector(".message")

choice.addEventListener("change", setChoice);

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    message.appendChild(img);
}

function setChoice() {
    const option = choice.value;

    //rocks options

    if (option === "sodalite") {
        message.textContent = 
        "You feel like a whole being whose air has dispersed evenly...";
        show_image('./images/rocks/sodalite.jpg', 200, 200, 'Sodalite');
    } else if (option === "quartz") {
        message.textContent =
        "You begin to know a clarity like your old backyard pool...";
        show_image('./images/rocks/quartz.jpg', 200, 200, 'Quartz');
    } else if (option === "desert-rose") {
        message.textContent =
        "You sense the fruit of intuition ripe behind your eyes...";
        show_image('./images/rocks/desert-rose.jpg', 250, 200, 'Desert Rose');
    } else if (option === "tourmaline") {
        message.textContent =
        "You feel your inner tension's tide subtly change direction...";
        show_image('./images/rocks/tourmaline.jpg', 250, 200, 'Tourmaline');
        
    //teas options

    } else if (option === "white") {
        message.textContent = 
        "You feel like the last unpicked flower drying in the comfy sun...";
        show_image('../images/teas/white.jpg', 200, 200, 'White Tea');
    } else {
        message.textContent =
        "";
    }

}