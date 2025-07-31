// Function to check the answer
function checkAnswer() {
    const correctAnswer = "4"; // Correct answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById("feedback");

    // If user hasn’t selected anything
    if (!selectedOption) {
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "#dc3545"; // Red
        return;
    }

    const userAnswer = selectedOption.value;

    // Check if correct
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "#28a745"; // Green
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "#dc3545"; // Red
    }
}

// Attach event listener
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
