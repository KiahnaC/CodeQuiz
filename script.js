//start the game
//set the question
//select answer
const startButton = document.getElementById('start-btn') 
const nextButton = document.getElementById('next-btn')// this "points" to an element on our document
const questionContainer = document.getElementById('question-container')
let answerButtonsArr = document.querySelectorAll(".answer-btn")
let mixedQuestions, currentQuestions
const questionsEl =document.getElementById('questions')
const answerEl = document.getElementById('answer-btn')

console.log(answerButtonsArr)

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    questionEl++
    nextQuestion()
})

function startGame() {
    console.log('Quiz Has Begun')
    startButton.classList.add('hide')
    mixedQuestions = question.sort(() => Math.random -.2)
    currentQuestions = 0
    nextQuestion()

}
function nextQuestion() {
    resetState() 
        nextQuestion(mixedQuestions,[questionEl])
    
}

function nextQuestion() {
    // assign our first question to a variable
  showQuestion(mixedQuestions[currentQuestions])
  question.answers.questionArr.forEach(answer => {
      const button= document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
      }
    button.dataset.correct = answer.correct 

      button.addEventListener('click', selectAnswer)
      answerEl.appendChild(button)
  })
}
function resetState()
nextButton.classList.add('hide')
while (answerEl.firstChild)
answerEl.removeChild
(answerEl.firstChild)

function selectAnswer() {

}

const questionArr = [
    {
        question: 'What is 8*8',
        answers: [
            { text: '64', correct: true },
            { text: '72', correct: false },
            { text: '81', correct: false },
            { text: '112', correct: false },
        ]
    },
    {
        question: ' what is the " # " refrencing in CSS markup?',
        answers: [
            { text: 'an Id', correct: true},
            { text: 'a class', correct: false },
            { text: 'a link', correct: false },
            { text: 'my dog is so cute', correct: false },
        ]
    },

{
    question: 'What Does the StyleSheet usually in refrence to?',
    answers: [
        { text: 'Javascript', correct: false },
        { text: 'CSS', correct: true},
        { text: 'React', correct: false },
        { text: 'what is a stylesheet?', correct: false },
    ]
},

{
    question: 'What are some examples of semantic tags',
    answers: [
        { text: 'organized, scripted, paragraph', correct: false },
        { text: 'coconut, pineapple, rum', correct: false },
        { text: 'mock-up, text, href', correct: false },
        { text: 'artical, section, footer', correct: true},
    ]
},
]



// console.log(questionsArr[0].answers[0].text) // dot notation

// loop through elements
function addAnswers(arr) {
    for (let i = 0; i < answerButtonsArr.length; i++) {
        answerButtonsArr[i].textContent = arr[0].answers[i].text
    }
}
