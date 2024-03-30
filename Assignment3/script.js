// script.js
document.addEventListener('DOMContentLoaded', function() {
  const quizForm = document.getElementById('quiz-form');
  const feedback = document.getElementById('feedback');
  const scoreDisplay = document.getElementById('score');
  let score = 0;

  // "Fake" authentication
  const authenticated = true;

  if (authenticated) {
    // Display quiz questions
    quizForm.style.display = 'block';

    // Event listener for form submission
    quizForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // Check answers
      const q1Answer = quizForm.elements['q1'].value;
      const q2Answer = quizForm.elements['q2'].value;
      const q3Answer = quizForm.elements['q3'].value;
      const q4Answer = quizForm.elements['q4'].value;
      const q5Answer = quizForm.elements['q5'].value;

      if (q1Answer === 'b') score++;
      if (q2Answer === 'c') score++;
      if (q3Answer === 'b') score++;
      if (q4Answer === 'a') score++;
      if (q5Answer === 'b') score++;

      // Provide feedback
      feedback.textContent = `You got ${score} out of 5 questions correct.`;

      // Reset score for retakes
      score = 0;
    });
  } else {
    feedback.textContent = 'Please login to access the quiz.';
  }
});
