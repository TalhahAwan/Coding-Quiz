var secondsLeft = 60;

var quizTimer = document.querySelector("#quizTimer");
var timeEl = document.querySelector("#secondsLeft");



// quizTimer.addEventListener("click", setTime())


function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action
            clearInterval(timerInterval);
        }

    }, 1000);
}