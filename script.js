//global variables
var startScreen = document.getElementById('js-start-screen')
var startButton = document.getElementById('js-start-btn')
var quizScreen = document.getElementById('js-quiz-screen')
var questionText = document.getElementById('js-question-text')
var choices = document.getElementById('js-choices')
var timerEl = document.getElementById('countdown')
var currentQuestion = -1;
var listEl = document.createElement("ul")
var choiceOne = document.getElementById("choice-1")
var choiceTwo = document.getElementById("choice-2")
var choiceThree = document.getElementById("choice-3")
var choiceFour = document.getElementById("choice-4")
var rightAnswer = document.getElementById("right answer")
var wrongAnswer = document.getElementById("wrong-answer")
var submitScore = document.getElementById("submit-score")
var placeHolder = document.getElementById("initials")
var highScore = document.getElementById("high-score")
//questions
var questions = [
    {
        //question 1   
        question: "Commonly used data types do not include",
        answers: ["a. Strings", "b. Booleans", "c. Alerts", "d. Numbers"],
        correctAnswer: "c. Alerts"
    },
    {
        //question 2     
        question: "The condition in an if/ else statement is enclosed with what?",
        answers: ["a. Quotes", "b. Curly brackets", "c. Parenthesis", "d.Secure brackets"],
        correctAnswer: "b. Curly brackets"
    },
    {
        //question 3    
        question: "Arrays in javascript can be used to store what?",
        answers: ["a. Numbers and strings", "b. Other arrays", "c. booleans", "d. All of these above"],
        correctAnswer: "d. All of the above"
    },
    {
        //question 4    
        question: "String values must be enclosed within what when being assigned to variables?",
        answers: ["a. Commas", "b. Curly brackets", "c. Quotes", "d. Parenthesis"],
        correctAnswer: "c. Quotes"
    },
    {
        //question 5    
        question: "A very useful tool during development and debugging for printing content to the debugger is:",
        answers: ["a. Javascript", "b. Terminal/bash", "c. for loops", "d. Console.log"],
        correctAnswer: "d. Console.log"
    },
]


//timer countdown
function countdown() {
    var timeLeft = 90;
    var timerInterval = setInterval(function () {

        if (timeLeft > 0) {

            timerEl.textContent = timeLeft + 'Time Left';
            timeLeft--;

        } else if (timeLeft === 0 || questions.length) {
            clearInterval(timerInterval)
            timerEl.textContent = timeLeft + 'Time up!'


        }
        if (currentQuestion > questions.length) {

        }
    }, 1000)
}

//hides start screen and shows first question
startButton.addEventListener("click", function () {
    startScreen.classList.add("hide")
    quizScreen.classList.remove("hide")
    choices.classList.remove("hide")
  
    countdown()
    showQuestion()


//shows questions and answers
    function showQuestion() {
    currentQuestion++;
        if (validQuestion()) {

            questionText.textContent = questions[currentQuestion].question;
            choiceOne.textContent = questions[currentQuestion].answers[0];
            choiceTwo.textContent = questions[currentQuestion].answers[1];
            choiceThree.textContent = questions[currentQuestion].answers[2];
            choiceFour.textContent = questions[currentQuestion].answers[3];

            choiceOne.value = questions[currentQuestion].answers[0];
            choiceTwo.value = questions[currentQuestion].answers[1];
            choiceThree.value = questions[currentQuestion].answers[2];
            choiceFour.value = questions[currentQuestion].answers[3];
        } else {
            quizOver();
        }
    }
    //checks question length
function validQuestion() {

    if (currentQuestion >= questions.length) {
        return false;
    } else {
        return true;
    }
}
//checks if answer is right or wrong and takes away 10 seconds.
function checkAnswer(answers) {
    if (answers == questions[currentQuestion].correctAnswer) {
        rightAnswer.classList.remove("hide")
        var hideRight = setInterval(function (){
            rightAnswer.classList.add("hide")
            clearInterval(hideRight)
        }, 500);

    } else {
        rightAnswer.classList.remove("hide")
        var hideWrong = setInterval(function (){
            wrongAnswer.classList.add("hidden")
            clearInterval(hideWrong)
        }, 500);
}}

})