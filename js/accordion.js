
const questionContainer = document.querySelectorAll('.question-container');

questionContainer.forEach(question => question.addEventListener('click', () => {

    // 03 close the previous accordion before opening a new one
    const openQuestion = document.querySelector('.question-container.show-answer')
    if(openQuestion && openQuestion !== question){
        openQuestion.classList.toggle('show-answer')
        openQuestion.nextElementSibling.style.maxHeight = 0;
    }

    // 01 toggle the plus/minus sign
    question.classList.toggle('show-answer')

    // 02 show/hide the answer
    const answer = question.nextElementSibling;
    if(question.classList.contains('show-answer')){
        answer.style.maxHeight = answer.scrollHeight + 'px';
    }else{
        answer.style.maxHeight = 0;
    }

}));