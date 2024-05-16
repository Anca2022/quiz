const questions = [
    {question: 'What does HTML stand for?', options: ['A. Hyper Type Multi Language', 'B. Hyper Text Multiple Language', 'C. Hyper Text Markup Language', 'D. Home Text Multi Language']}, 
    {question: 'What does CSS stand for?', options: ['A. Cascading Style Sheet', 'B. Cute Style Sheet', 'C. Computer Style Sheet', 'D. Code Style Sheet']},
    {question: 'What dies PHP stand for?', options: ['A. Hypertext Preprocessor', 'B. Hometext Programming', 'C. Hypertext Preprogramming', 'D. Programming Hypertext Preprocessor']},
    {question: 'What does SQL stand for?', options: ['A. Strength Query Language', 'B. Stylesheet Query Language', 'C. Science Question Language', 'D. Structured Query Language']},
    {question: 'What does XML stand for?', options: ['A. Excellent Multiple Language', 'B. Explore Multiple Language', 'C. Extra Markup Language', 'D. Extensible Markup Language']}
]
const homepage = document.querySelector('.home');
const quizGuide = document.querySelector('.quiz-guide');
const slideSection = document.querySelector('.slide');
const startQuizBtn = document.querySelector('.start-quiz');
const exitQuizBtn = document.querySelector('.exit-btn');
const continueBtn = document.querySelector('.continue-btn'); 

let currentQuestion = 0; 
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
    if(currentQuestion == questions.length){
        //quiz-box inactive; 
        quizBox.classList.add('inactive');
        // quiz-result active; 
        quizResult.classList.add('active');
        currentQuestion = 0;
    } else if (currentQuestion < questions.length){
        questionParagraph.textContent = `${index+1}. ${questions[index].question}`; 
        for(let i=0; i<optionParagraphs.length; i++){
            optionParagraphs[i].textContent = questions[index].options[i];
        }
        questionNumber.textContent = `${currentQuestion+1} of 5 Questions`;
    }
}