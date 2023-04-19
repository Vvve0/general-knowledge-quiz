const questions = [
    {
        question: "What is the biggest animal?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false },
        ]
    },
    {
        question: "Which of these elements is a Noble Gas?",
        answers: [
            { text: "Nitrogen", correct: false },
            { text: "Oxygen", correct: false },
            { text: "Argon", correct: true },
            { text: "Chlorine", correct: false },
        ]
    },
    {
        question: "What is the capital city of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "London", correct: false },
            { text: "Rome", correct: false },
            { text: "Paris", correct: true },
        ]
    },
    {
        question: "Which of these animals is a mammal?",
        answers: [
            { text: "Crocodile", correct: false },
            { text: "Platypus", correct: true },
            { text: "Frog", correct: false },
            { text: "Eagle", correct: false },
        ]
    },
];

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        answerButtonsElement.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);

    });

}
function resetState() {
    nextButton.style.display = 'none';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) { // e is the event object
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('incorrect');
    }
    Array.from(answerButtonsElement.children).forEach(button => { // Convert the HTMLCollection to an array
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true; // Disable all the buttons
    });
    nextButton.style.display = 'block';
}; // End of selectAnswer()

function showScore() {
    resetState(); // Call the function
    questionElement.innerHTML = "Your score is " + score + " out of " + questions.length;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = 'block';
};

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore(); // Call the function   
    }
};
nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton(); // Call the function
    } else {
        startQuiz();
    }
}); // End of nextButton event listener
startQuiz(); // Start the quiz