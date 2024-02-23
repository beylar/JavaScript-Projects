const quiz = [
    {
        question: "Who is the president of the United States?" ,
        choices: ["Paul Kagame","Joe Biden","William Ruto"] ,
        answer: "Joe Biden",
    },
    {
        question: "Who is the richest person on earth?" ,
        choices: ["Elon Musk","Bill Gates","Mark"] ,
        answer: "Elon Musk",

    },
    {   
        question: "What is the main language used in backend?" ,
        choices: ["JavaScript","Html","CSS"] ,
        answer: "JavaScript",
    },
];

//console.log(quiz);

//Generating random questions from the user
let correctAnswers = 0;
let incorrectAnswers = 0;
const displayRandomQuiz = () => {
    //this function will give the user one of these questions at random
    let randomNumber = Math.floor(Math.random()*3);

    const currentQuestion = quiz[randomNumber];

    console.log(currentQuestion.question);
    for (let i = 0; i < currentQuestion.choices.length; i++){
        console.log(`${i+1}.${currentQuestion.choices[i]}`);
    }

    console.log("Enter your answer to the given question");

    //You can replace user input to evaluate the response to different user answers
    const userAnswer = '0';

    //receiving user's answer and giving feedback
    if (userAnswer&& parseInt(userAnswer) === currentQuestion.choices.indexOf(currentQuestion.correctAnswer) + 1 ){
        console.log("Very Good!");
        correctAnswers++;
    } else {
        console.log(`Incorrect. The correct answer is ${currentQuestion.correct}`);
        incorrectAnswers++;
    }
    
    //scoring system by giving the number of correct and incorrect answers
    console.log(`Correct Answers: ${correctAnswers}`);
    console.log(`Incorrect Answers: ${incorrectAnswers}`);

};

displayRandomQuiz();

