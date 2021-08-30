var secondsLeft = 60;

var quizTimer = document.querySelector("#quizTimer");
var timeEl = document.querySelector("#secondsLeft");
var questions = [{
        question: "What button do you press to open up developer tools on a webpage?",
        choices: ["fn + 2", "f12", "fn + 1", "f11"],
        answer: "f12"

    },
    {
        question: "Which of these header tags shows the largest font?",
        choices: ["h4", "h3", "h6", "h2"],
        answer: "h2"

    },
    {
        question: "_______ is the process of finding errors and fixing them within a program.",
        choices: ["Compiling", "Scanning", "Executing", "Debugging"],
        answer: "Debugging"

    }
];



// quizTimer.addEventListener("click", setTime())


function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action
            clearInterval(timerInterval);
        }
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            finished();
            timeEl.textContent = "Game Over"
            
        };
    }, 1000);
};