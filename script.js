//start the game
//set the question
//select answer

const startButton=document.getElementById('start-btn')
startButton.addEventListener('click', startGame)
const nextButton= document.getElementById('next-btn')
const questionContainer = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerEl = document.getElementById('answerBtn')

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

function nextQuestion(question) {
    questionsEl.innerText =    questions.question
    question.answerEl.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.innerTextbutton.classList.add('btnbtn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
    })
    reset() 
    showQuestion(questionEl [currentQuestion])
    
}


function Question() {



}



function Answer() {





}
