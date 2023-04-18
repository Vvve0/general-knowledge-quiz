const startButton = document.querySelector('.start-button');
const welcomeWrapper = document.querySelector('.welcome-wrapper');
const questionContainers = document.querySelectorAll('.question-wrapper');
const timer = document.querySelector('.timer');
const nextButton = document.querySelector('.next');

let currentQuestionIndex = 0;

function startQuiz() {
    welcomeWrapper.classList.add('hide');
    timer.classList.add('active');
    nextButton.classList.add('active');
    showCurrentQuestion();
}

function showCurrentQuestion() {
    questionContainers.forEach((question, index) => {
        if (index === currentQuestionIndex) {
            question.classList.add('active');
        } else {
            question.classList.remove('active');
        }
    });
}

function goToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questionContainers.length) {
        showCurrentQuestion();
    } else {
        // coś zrobić po przejściu przez wszystkie pytania.
    }
}

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', goToNextQuestion);