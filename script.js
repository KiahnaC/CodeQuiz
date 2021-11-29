//start the game
//set the question
//select answer

const startButton=document.getElementById('start-btn')
startButton.addEventListener('click', startGame)
const nextButton= document.getElementById('next-btn')
const questionContainer = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerEl = document.getElementById('answerBtn')

const questions = [
    {
      question: 'What is 2 + 2?',
      answers: [
        { text: '4', correct: true },
        { text: '22', correct: false }
      ]
    },
    {
      question: 'Who is the best YouTuber?',
      answers: [
        { text: 'Web Dev Simplified', correct: true },
        { text: 'Traversy Media', correct: true },
        { text: 'Dev Ed', correct: true },
        { text: 'Fun Fun Function', correct: true }
      ]
    },
    {
      question: 'Is web development fun?',
      answers: [
        { text: 'Kinda', correct: false },
        { text: 'YES!!!', correct: true },
        { text: 'Um no', correct: false },
        { text: 'IDK', correct: false }
      ]
    },
    {
      question: 'What is 4 * 2?',
      answers: [
        { text: '6', correct: false },
        { text: '8', correct: true }
      ]
    }
  ]

let questionEL, currentQuestion

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestion++
  nextQuestion()
})


function startGame() {
  console.log('Your Game Has Begun')
  startButton.classList.add('hide')
  questionsEl = questions.sort(() => Math.random()- .2)
  currentQuestion = 0
  questionsContainer.classList.currentQuestion.remove('hide')
  nextQuestions()
};
function reset() 
showQuestion(questionEl [currentQuestion])

function nextQuestion(question) {
    questionsEl.innerText =    questions.question
    question.answerEl.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.innerTextbutton.classList.add('btnbtn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', Answerselect)
        answerEl.append(button)
    })
  function reset() {
      clearClass(document.body)
      nextButton.classList.add('hide')
      while (answerEl.firstChild) {
          answerEl.removeChild(answerEl.firstChild)
      }

function Answer(e) {
    const highlightedBtn =e.target
    const correct =highlightedBtn.dataset.correct
    setClass(document.body, correct)
    Array.from(answerEl.children).forEach(button =>{
        setClass(button,button.dataset.correct)
    })
    if (questionEl.clientHeight > current + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Reset'
        startButton.classList.remove('hide')
    }

    function setClass(element, correct) {
        clearClass(element)
        if(correct){
            element.classList.add('correct')
        } else {
            element.classList.add('wrong')

        };

