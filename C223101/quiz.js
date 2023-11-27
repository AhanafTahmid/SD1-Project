
const quizData = [
    {
      question: "What is the approximate number of galaxies in the observable universe?",
      a: "100 million",
      b: "1 billion",
      c: "100 billion",
      d: " 1 trillion",
      correct: "c",
    },
    {
      question: "Which galaxy is classified as an irregular galaxy?",
      a: "Andromeda",
      b: "Triangulum",
      c: "Large Magellanic Cloud",
      d: "Sombrero Galaxy",
      correct: "c",
    },
    {
      question: "What is the name of the galaxy closest to the Milky Way?",
      a: "Andromeda",
      b: "Black eye",
      c: "Comet",
      d: "Sunflower",
      correct: "a",
    },
    {
      question: "What's the estimated age of the universe based on observations of the oldest known galaxies?",
      a: "4.6 billion years",
      b: "10 billion years",
      c: "13.8 billion years",
      d: "20 billion years",
      correct: "c",
    },
    {
      question: "Which type of galaxies are often found among the farthest observed galaxies?",
      a: "Elliptical galaxies",
      b: "Spiral galaxies",
      c: "Irregular galaxies",
      d: "Dwarf galaxies",
      correct: "c",
    },


  ];

  const quiz = document.getElementById('quiz')
  const answerEl = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const d_text = document.getElementById('d_text')
  const submitBtn = document.getElementById('submit')


  let currentQuiz = 0
  let score = 0

  loadQuiz()

  function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
  }

  function deselectAnswers() {
    answerEl.forEach(answerEl => answerEl.checked = false)
  }

  function getSelected() {
    let answer
    answerEl.forEach(answerEl => {
      if (answerEl.checked) {
        answer = answerEl.id
      }
    })
    return answer
  }

  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++
      }

      currentQuiz++

      if (currentQuiz < quizData.length) {
        loadQuiz()
      } else {
        quiz.innerHTML = `
             <h2>You answered ${score}/${quizData.length} questions correctly</h2>
  
             <button onClick="location.href=location.href">RELOAD</button>
             `
      }
    }
  })