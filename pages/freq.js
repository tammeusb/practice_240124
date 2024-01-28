const hertzInputOne = document.querySelector(".freq-one");
const hertzInputTwo = document.querySelector(".freq-two");
const hertzInputThree = document.querySelector(".freq-three");

const log = document.querySelector(".log");

hertzInputThree.addEventListener("input", mergeHertz);

function mergeHertz() {

    const hertzValueOne = hertzInputOne.value;
    const hertzValueTwo = hertzInputTwo.value;
    const hertzValueThree = hertzInputThree.value;

    log.textContent = hertzValueOne + " " + hertzValueTwo + " " + hertzValueThree;
}