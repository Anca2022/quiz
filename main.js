const homepage = document.querySelector('.home');
const quizGuide = document.querySelector('.quiz-guide');
const slideSection = document.querySelector('.slide');
const startQuizBtn = document.querySelector('.start-quiz');
const exitQuizBtn = document.querySelector('.exit-btn');
const continueBtn = document.querySelector('.continue-btn'); 


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
})