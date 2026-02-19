let currentQuestionIndex = 0;
let questions = [];
let correctAnswers = 0;
let totalquestions = 0;

let selectedAnswer = null;

// Function to fetch questions from api
async function fetchQuestions() {
    try {
        // const response = await fetch('localhost:8080/api/questions');
        const response = await fetch(`http://localhost:8080/${localStorage.getItem('quizType')}/questions`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        questions = await response.json();
        totalquestions = questions.length;

        document.getElementById('total-questions').textContent = totalquestions;

        displayQuestion();

    } catch (error) {
        console.error('Error fetching questions: ', error);
        document.getElementById('question-text').textContent = "Failed to load questions. Please try again.";
    }

}

function displayQuestion() {
    if (questions.length === 0) return;

    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const currentQuestion = questions[currentQuestionIndex];

    // THIS LINE MIGHT CHANGE ACC TO THE OBJECT OF THE QUESTION
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        // YOU CAN CHANGE IT TO CLASSNAME IF ERROR OCCURS
        button.classList.add('option');
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });

    document.getElementById('current-question').textContent = currentQuestionIndex + 1;

}

function checkAnswer(selectedOption) {

    selectedAnswer = selectedOption;

    const currentQuestion = questions[currentQuestionIndex];

    // Increment if the answer is correct
    if (selectedOption === currentQuestion.correctAnswer) {
        correctAnswers++;
    }

    // Automatically move to the next Question after checking the answer
    nextQuestion();
}

function nextQuestion() {

    // current question index increase after clicking next button
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length - 1) {
        displayQuestion();
    }
    else {

        localStorage.setItem('quizScore', correctAnswers);
        localStorage.setItem('totalQuestions', totalquestions);
        window.location.href = 'result.html';
    }
}

window.onload = fetchQuestions;