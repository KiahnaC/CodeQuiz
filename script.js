//start the game
//set the question
//select answer
const startButton = document.getElementById('startBtnBtn')
const nextButton = document.getElementById('nextBtnBtn')
const questionsContainer = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerBtn = document.getElementById('answerBtn')

let mixedQuestions,currentQuestion;
let quizScoreboard =0;


function resetState(){
    clearStatus(document.body)
    nextButton.classList.add('hide')
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild)
    }
}
// Remove and add classes
function clearStatus(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
startButton.addEventListener('click', beginQuiz)
nextButton.addEventListener('click',() =>{
    currentQuestion++
  
})
function beginQuiz() {
    startButton.classList.add('hide')
    mixedQuestions=questions.questionsContainer(() =>Math.random() - .5)
    currentQuestion=0;
}
    questionsContainer.classList.remove('hide')
    quizScoreboard=0
    console.log("you have begun the quiz!")
   
//This function is going to allo the user to interact with the answers
function quizAnswer(e){
    const tagetBtn=e.target
    const correct=targetBtn.dataset.correct
    setStatus(document.body,correct)
    Array.from(answerBtn.childern).forEach((button) => {
        setStatus(button.dataset.correct)
    })
    if(mixedQuestions.length > currentQuestion +1){
        nextButton.classList.remove("hide")
    }
    else {
        startButton.innerText="restart"
        startButton.classList.remove("hide")
    }
    if(tagetBtn.dataset = correct) {
        quizScoreboard++
        console.log('Answers are showing!')
}
document.getElementById('correctAnswers').innerText=quizScoreboard



//This function is setting the if and else statement to discern the right and wrong answers

function setStatus(element, correct){
    clearStatus(element)
    if(correct){
        element.classList.add('correct')
    }
    else{
        element.classList.add('wrong')
    }
    }
}
// Questions that users will be asked
const questions = [ 
    { question: "What is a stylesheet used when doing web design?",
		answers: [
            {text: 'Css', correct: true},
            {text: 'Javascript',correct: false},
            {text: 'Css', correct: false},
            {text: 'Css', correct: false},
            ],
			
		},
	
	{
		question: "What is the Html page used for when creating a webpage?",
		answers: [
            {text: 'Local Storage', correct: false},
            {text: 'Javascript',correct: false},
            {text: 'basic mockup of page', correct: true},
            {text: 'Styling', correct: false},
            ],
	
	},
    {
		question: "Which link below is used to connect a script.js page and Html page?",
		answers: [
            {text: '#script.js', correct: false},
            {text: '<link src=script.js></link>',correct: false},
            {text: '@script.js', correct: false},
            {text: '<script type="text/javascript" src="yourfile.js"></script>', correct: true},
            ],
	},

    {
		question: "What webpage is a great resouce when coding?",
		answers: [
            {text: 'WebMd', correct: false},
            {text: 'MDN',correct: true},
            {text: 'twitter', correct: false},
            {text: 'Apple Music', correct: false},
            ],
	},

{
    question: "What is a simple command to save your work (Mac)?",
    answers: [
        {text: 'Command + O', correct: false},
        {text: 'Control + Z',correct: false},
        {text: 'Command + S', correct: true},
        {text: 'Control + S', correct: false},
        ],
    },
]
//This function is going to allow the user to see and interact with the prompts
function showQuestions(questions){
    questionEl.innerText=questions.questions;
    questionsContainer.answers.forEach((answer) => {
        const button = document.createElement('button')
        button.innerText=answer.text;
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct =answer.correct
        
        button.addEventListener('click', targetBtn)
        answerBtn.appendChild(button)
        console.log("questions have populated for user")
        }
        })
    }



