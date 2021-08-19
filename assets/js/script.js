var timerEl = document.querySelector('.timerCount')
var startButton = document.querySelector('.startBtn')
var quizQuestions = document.querySelector('.quiz')
var timer;
var timeLeft;

function startQuiz() {
    timeLeft = 75;
    countdown();
}

function countdown() {

    timer = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
        }
    }, 1000);
}


startButton.addEventListener("click", startQuiz);