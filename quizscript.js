const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: {
      a: "London",
      b: "Paris",
      c: "Berlin"
    },
    correctAnswer: "b"
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: {
      a: "Mars",
      b: "Jupiter",
      c: "Earth"
    },
    correctAnswer: "b"
  },
  {
    question: "What year did World War I begin?",
    answers: {
      a: "1914",
      b: "1939",
      c: "1945"
    },
    correctAnswer: "a"
  }
];

function buildQuiz() {
  const output = [];

  quizQuestions.forEach((question, index) => {
    const answers = [];

    for (const letter in question.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${index}" value="${letter}">
          ${letter.toUpperCase()}: ${question.answers[letter]}
        </label><br>`
      );
    }

    output.push(
      `<div class="question">Q${index + 1}. ${question.question}</div>
      <div class="answers">${answers.join('')}</div><br>`
    );
  });

  quizContainer.innerHTML = output.join('');
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll('.answers');
  let score = 0;

  quizQuestions.forEach((question, index) => {
    const answerContainer = answerContainers[index];
    const selectedInput = answerContainer.querySelector(`input[name="question${index}"]:checked`);
    const userAnswer = selectedInput ? selectedInput.value : undefined;

    if (userAnswer === question.correctAnswer) {
      score++;
      answerContainer.style.color = 'green';
    } else {
      answerContainer.style.color = 'red';
    }
  });

  resultsContainer.style.display = 'block';
  resultsContainer.innerHTML = `You scored ${score} out of ${quizQuestions.length} correct!`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);