const hertzInputOne = document.querySelector(".freq-one");
const hertzInputTwo = document.querySelector(".freq-two");
const hertzInputThree = document.querySelector(".freq-three");

const button = document.querySelector(".merge");

const log = document.querySelector(".log");

button.addEventListener("click", mergeHertz);

// hertzInputThree.addEventListener("input", mergeHertz); 
// save this event listener to change bg color of fields? 

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