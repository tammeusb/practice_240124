const hertzInputOne = document.querySelector(".freq-one");
const hertzInputTwo = document.querySelector(".freq-two");
const hertzInputThree = document.querySelector(".freq-three");

hertzInputOne.addEventListener("input", () => 
    hertzInputOne.value > 100
    ? colorHertzOne("purple", "white")
    : colorHertzOne("white", "black")
); 

function colorHertzOne(bgColor, textColor) {
    hertzInputOne.style.backgroundColor = bgColor;
    hertzInputOne.style.color = textColor;
}

const button = document.querySelector(".merge");

const log = document.querySelector(".log");

button.addEventListener("click", mergeHertz);

function mergeHertz() {

    const hertzValueOne = hertzInputOne.value;
    const hertzValueTwo = hertzInputTwo.value;
    const hertzValueThree = hertzInputThree.value;

    const output = document.querySelector(".output")

    //debug
    // log.textContent = hertzValueOne + " " + hertzValueTwo + " " + hertzValueThree;

    if (hertzValueOne < 50 && (hertzValueTwo > 50 && hertzValueTwo < 100) && hertzValueThree >= 100 ) {
        output.textContent = "You've made a nice spacious chord.";
    } else {
        output.textContent = "";
    }

}