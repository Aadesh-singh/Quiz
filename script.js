var quizData = [
    {
        ques: 'who is best Coder of all time?',
        a: 'none of the above',
        b: 'harsh s',
        c: 'pratik narang',
        d: 'love babbar',
        correct: 'a'
    },
    {
        ques: 'which is the most popular programming language ?',
        a: 'java',
        b: 'javascript',
        c: 'c',
        d: 'python',
        correct: 'b'
    },
    {
        ques: 'which is the silicon vally of india ?',
        a: 'banglore',
        b: 'noida',
        c: 'delhi',
        d: 'none of the above',
        correct: 'a'
    },
    {
        ques: 'Full form of DOM ?',
        a: 'Data object Model',
        b: 'Document Object Model',
        c: 'database object model',
        d: 'None of the above',
        correct: "b"
    },
    {
        ques: 'which company does not belong to faang but also give largest pakage ?',
        a: 'netflix',
        b: 'payTM',
        c: 'flipkart',
        d: 'b & c both',
        correct: 'd'
    }
];

const quiz = document.getElementById('quiz-container');
const answerEls  = document.querySelectorAll('.ans');
const displayQuestion = document.getElementById('question-heading');
const optionA  = document.getElementById('optionA');
const optionB = document.getElementById('optionB');
const optionC  = document.getElementById('optionC');
const optionD  = document.getElementById('optionD');
const submitBtn = document.getElementById('submit-button');

let currentQuestion = 0;
let score = 0;

loadQuiz();

function startQuiz() {
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('cont').classList.add('hidden');
}


function loadQuiz() {
    deselect();
    currentQuizData = quizData[currentQuestion];
    // displaying
    displayQuestion.innerText = currentQuizData.ques;
    optionA.innerText = currentQuizData.a;
    optionB.innerText = currentQuizData.b;
    optionC.innerText = currentQuizData.c;
    optionD.innerText = currentQuizData.d;   
    
}

function deselect(){
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}

function getSelected() {
    

    let answer = undefined
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer =  answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    console.log(answer);
    
    if(answer) {

        if(answer === quizData[currentQuestion].correct){
            score++;
        }

        currentQuestion++;
        
        if(currentQuestion < quizData.length) {
            loadQuiz();
        }else {
            quiz.innerHTML = `<h2>You scored ${score}/${quizData.length} Correctly!!!, Please refresh page and try again!! This time is yours i bet.`;
        }
    }
});