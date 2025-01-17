const decreaseButton = document.getElementById("decreaseButton");
const resetButton = document.getElementById("resetButton");
const increaseButton = document.getElementById("increaseButton");
const numberStore = document.getElementById("numberStore");
let count = 0;

decreaseButton.onclick = function() {
    count--;
    numberStore.innerHTML = count;
};

increaseButton.onclick = function() {
    count++;
    numberStore.innerHTML = count;
};

resetButton.onclick = function() {
    count = 0
    numberStore.innerHTML = count;
};
