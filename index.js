let count = 0;
const maxLimit = 10;

const countDisplay = document.getElementById("count");
const message = document.getElementById("message");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

increaseBtn.addEventListener("click", function () {
    if (count < maxLimit) {
        count++;
        message.textContent = "";
    } else {
        message.textContent = "Maximum limit reached (10)";
    }
    countDisplay.textContent = count;
});

decreaseBtn.addEventListener("click", function () {
    count--;
    message.textContent = "";
    countDisplay.textContent = count;
});

resetBtn.addEventListener("click", function () {
    count = 0;
    message.textContent = "";
    countDisplay.textContent = count;
});
