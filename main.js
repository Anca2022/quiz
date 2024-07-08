const questions = [
    {question: 'What does HTML stand for?', options: ['A. Hyper Type Multi Language', 'B. Hyper Text Multiple Language', 'C. Hyper Text Markup Language', 'D. Home Text Multi Language'], correct: 'C. Hyper Text Markup Language'}, 
    {question: 'What does CSS stand for?', options: ['A. Cascading Style Sheet', 'B. Cute Style Sheet', 'C. Computer Style Sheet', 'D. Code Style Sheet'], correct: 'A. Cascading Style Sheet'},
    {question: 'What dies PHP stand for?', options: ['A. Hypertext Preprocessor', 'B. Hometext Programming', 'C. Hypertext Preprogramming', 'D. Programming Hypertext Preprocessor'], correct:'A. Hypertext Preprocessor' },
    {question: 'What does SQL stand for?', options: ['A. Strength Query Language', 'B. Stylesheet Query Language', 'C. Science Question Language', 'D. Structured Query Language'], correct: 'D. Structured Query Language'},
    {question: 'What does XML stand for?', options: ['A. Excellent Multiple Language', 'B. Explore Multiple Language', 'C. Extra Markup Language', 'D. Extensible Markup Language'], correct: 'D. Extensible Markup Language'}
]
const homepage = document.querySelector('.home');
const quizGuide = document.querySelector('.quiz-guide');
const slideSection = document.querySelector('.slide');
const startQuizBtn = document.querySelector('.start-quiz');
const exitQuizBtn = document.querySelector('.exit-btn');
const continueBtn = document.querySelector('.continue-btn'); 

let currentQuestion = 0; 
let score = 0; 
const scoreSpan = document.querySelector('.score');
const questionParagraph = document.querySelector('.question');
const optionParagraphs = document.querySelectorAll('.option');
const questionNumber = document.querySelector('.question-number');
const nextQuestionBtn = document.querySelector('.next-question');

const quizBox = document.querySelector('.quiz-box');
const quizResult = document.querySelector('.quiz-result');

const tryAgainBtn = document.querySelector('.try-again');
const goHomeBtn = document.querySelector('.go-home');

startQuizBtn.addEventListener("click", () => {
    homepage.classList.add('blured'); 
    quizGuide.classList.add('active');
})

exitQuizBtn.addEventListener('click', () => {
    homepage.classList.remove('blured'); 
    quizGuide.classList.remove('active');
})

continueBtn.addEventListener('click', ()=>{
    quizGuide.classList.remove('active');
    slideSection.classList.add('active');
    goToNextQuestion(currentQuestion); 
})

optionParagraphs.forEach(option => option.addEventListener('click', (e)=>{
    if (e.target.textContent == questions[currentQuestion].correct){
        e.target.classList.add('correct');
        score++; 
        scoreSpan.textContent = `Score: ${score} / 5`;
    } else {e.target.classList.add('wrong');}

    e.target.parentNode.classList.add('disabled');
    nextQuestionBtn.setAttribute('class', 'btn');
}))

nextQuestionBtn.addEventListener('click', ()=>{
    currentQuestion++; 
    goToNextQuestion(currentQuestion); 
})

tryAgainBtn.addEventListener('click', ()=>{
    quizBox.classList.remove('inactive');
    quizResult.classList.remove('active');
    goToNextQuestion(currentQuestion); 
})

goHomeBtn.addEventListener('click', ()=>{
    quizResult.classList.remove('active');
    quizBox.classList.remove('inactive');
    slideSection.classList.remove('active');
    homepage.classList.remove('blured'); 
})

function goToNextQuestion(index){
    if (currentQuestion < questions.length){
        questionParagraph.textContent = `${index+1}. ${questions[index].question}`; 
        for(let i=0; i<optionParagraphs.length; i++){
            optionParagraphs[i].textContent = questions[index].options[i];
            optionParagraphs[i].setAttribute('class', 'option');
        }
        optionParagraphs[0].parentNode.classList.remove('disabled');
        questionNumber.textContent = `${currentQuestion+1} of 5 Questions`;
        nextQuestionBtn.setAttribute('class', 'btn disabled');
    } else  if(currentQuestion == questions.length){
        goToResult();  

    } 
}

function goToResult(){
    const percentageSpan = document.querySelector('.percentage');
    const finalScoreSpan = document.querySelector('.final-score');
    const conicGradient = document.querySelector('.conic-gradient'); 
    let scorePercentage = (score / 5 )*100; 
    let start = -1; 

    let intervalId= setInterval(()=>{
        start++; 
        percentageSpan.textContent = `${start}%`;
        conicGradient.style.background=`conic-gradient(var(--accent) ${3.6*start}deg, var(--lightgray2) 0)`; 
        if(start==scorePercentage) { clearInterval(intervalId);}   
    }, 30);

    finalScoreSpan.textContent= `You scored ${score} out of 5`;

    quizBox.classList.add('inactive');
    quizResult.classList.add('active');
    currentQuestion = 0;
    score = 0;
    scoreSpan.textContent = `Score: ${score} / 5`;
}