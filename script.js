function startQuiz(quizType) {
    alert(`Starting ${quizType.charAt(0).toUpperCase() + quizType.slice(1)} Quiz!`);

    localStorage.setItem('quizType',quizType);
    window.location.href = `quiz.html`;
}