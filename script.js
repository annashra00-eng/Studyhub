function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 4) {
        result.textContent = 'Correct! Great job.';
        result.style.color = 'green';
    } else {
        result.textContent = 'Wrong! Try again.';
        result.style.color = 'red';
    }
}