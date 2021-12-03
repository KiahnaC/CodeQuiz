//start the game
//set the question
//select answer
const startButton = document.getElementById('startBtn')
const nextButton = document.getElementById('nextBtn')
const questionsContainer = document.getElementById('questions-container')
const questionEl = document.getElementById('questions')
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


function quizeAnswer(e){
    const tagetBtn=e.target
    const correct=targetBtn.dataset.correct
    setStatus(document.body,correct)
    Array.from(answerBtn.childern).forEach(button) => {
        setStatus,button.dataset.correct)
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
}
document.getElementById('correct-answers').innerText=quizScoreboard




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


function clearStatus(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const Questions = [ 
    { question: "What is a stylesheet used when doing web design?",
		answers: [
            {text: 'Css', correct: true},
            {text: 'Javascript',correct: false},
            {text: 'Css', correct: false},
            {text: 'Css', correct: false},
            ]
			
		},
	
	{
		question: "What is the Html page used for when creating a webpage?",
		answers: [
            {text: 'Local Storage', correct: false},
            {text: 'Javascript',correct: false},
            {text: 'basic mockup of page', correct: true},
            {text: 'Styling', correct: false},
            ]
	
	},
    {
		question: "Which link below is used to connect a script.js page and Html page?",
		answers: [
            {text: '#script.js', correct: false},
            {text: '<link src=script.js></link>',correct: false},
            {text: '@script.js', correct: false},
            {text: '<script defer src="script.js"></script>', correct: true},
            ]
	},

    {
		question: "What webpage is a great resouce when coding?",
		answers: [
            {text: 'WebMd', correct: false},
            {text: 'MDN',correct: true},
            {text: 'twitter', correct: false},
            {text: 'Apple Music', correct: false},
            ]
	},

{
    question: "What is a simple command to save your work (Mac)?",
    answers: [
        {text: 'Command + O', correct: false},
        {text: 'Control + Z',correct: false},
        {text: 'Command + S', correct: true},
        {text: 'Control + S', correct: false},
        ]
},
]




















































