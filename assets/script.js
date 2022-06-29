let startButton = document.getElementById('start');
let scoresButton = document.getElementById('display-scores');
let section1 = document.getElementById('section-1');
let questionsSection = document.getElementById('cycled-questions');
let answer1 = document.getElementById('button1');
let answer2 = document.getElementById('button2');
let answer3 = document.getElementById('button3');
let answer4 = document.getElementById('button4');
let buttons = document.getElementsByClassName('buttons');
let answersElement = document.getElementById('answers');
let section2 = document.getElementById("scoreLog");
let currentScore = 0;
let timeRemaining = 60;
let questionNumber = 0;
let countdownTimerDisplay = document.getElementById('time-remaining');

var timer

//questions
let questions = [
    {
        title:"What identifier is used for an Array?",
        answers: ["[]", "()", "{}", "//"],
        answer: "[]"
    },
    {
        title:"Commonly used data types DO NOT include",
        answers: ["strings", "booleans", "alerts", "numbers"],
        answer:"alerts"
    },
    {
        title:"What statement can NOT be used to declare a variable in javascript?",
        answers: ["let", "var", "int", "const"],
        answer:"int"
    },
    {
        title:"What kind of file extension does a Javascript file have?",
        answers: [".Java", ".java", ".xml", ".js"],
        answer:".js"
    },
    {
        title:"What identifier is used for a javascript function?",
        answers: ["{}", "!", "[]", "()"],
        answer:"()"
    }
]
//end of global variables

//prevent form submission
let form = document.getElementById('main-form');
function submitForm(event) {
    event.preventDefault();
};
form.addEventListener('submit', submitForm);


//function to end the game
function endGame() {
    clearInterval(timer);
    console.log('game has ended')
    countdownTimerDisplay.textContent = 'You have ' + timeRemaining + ' seconds remaining.';
    saveScore();
    //hide questions
    hideElement2();
    //show report
}

//function to save score to local storage
function saveScore(timeRemaining, questionNumber) {
    window.localStorage.setItem('time-score', timeRemaining);
    window.localStorage.setItem('score', questionNumber);
}

//function to check answer
function checkAnswer(evt) {

    

    const value = evt.currentTarget.dataset.value

    for(let i = 0; i < questions.length; i++ ) {
        if( questions[questionNumber].answer === value) {
            questionNumber++;
            currentScore++;
            console.log("correct", questionNumber, questions.length);

            if (questionNumber === questions.length ){ 
                return endGame()

            }   

            cycleText();
            return;

        }
    }
    
    timeRemaining -= 5;

};
//function to check answer end


//function to run when you click the start button
document.getElementById('start').addEventListener('click', function() {
    hideElement();
    addButtons();
    cycleText();

    timer = setInterval(function() {
        timeRemaining--;
        countdownTimerDisplay.textContent = 'You have ' + timeRemaining + ' seconds remaining.';
        if(timeRemaining <= 0) {
            endGame();
        }
    },1000);



    answer1.addEventListener('click', checkAnswer);
    answer2.addEventListener('click', checkAnswer);
    answer3.addEventListener('click', checkAnswer);
    answer4.addEventListener('click', checkAnswer);


});
//end start function


 //function to run when you click the display scores button
 document.getElementById('display-scores').addEventListener('click', function() {
    console.log('scores clicked');
    hideElement();
    //displayScores();
 });

//functions to hide buttons
let hideElement = function(){
    startButton.classList.add('hidden');
    scoresButton.classList.add('hidden');
};

let hideElement2 = function(){
    section1.classList.add('hidden');
    section2.classList.remove("hidden")
};


//function to display buttons
let addButtons = function(){
    section1.classList.remove('hidden');;
};

//function to change text for questions
let cycleText = function() {
    questionsSection.textContent = questions[questionNumber].title;
    answer1.textContent = questions[questionNumber].answers[0];
    answer1.dataset.value = questions[questionNumber].answers[0];
    answer2.textContent = questions[questionNumber].answers[1];
    answer2.dataset.value = questions[questionNumber].answers[1];
    answer3.textContent = questions[questionNumber].answers[2];
    answer3.dataset.value = questions[questionNumber].answers[2];
    answer4.textContent = questions[questionNumber].answers[3];
    answer4.dataset.value = questions[questionNumber].answers[3];
};










//create for loop that counts backwards from 60, begins when start button is selected

//create function that appends buttons with questions[] array at current position when the variable with the correct attribute is selected
//let startQuestions =

//add class 'buttons' to all newly created buttons

//create function that ends game when time remaining <= 0 or when questions are finished

//save time remaining to a scores variable in local storage

//create function to display scores from local storage when scoresButton is clicked