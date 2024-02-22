const quiz = [
    {
        question: "Who is the president of the United States" ,
        choices: ["Paul Kagame","Joe Biden","William Ruto"] ,
        answer: "Joe Biden",
    },
    {
        question: "Who is the richest person on earth" ,
        choices: ["Elon Musk","Bill Gates","Mark"] ,
        answer: "Elon Musk",

    },
    {   
        question: "What is the main language used in backend" ,
        choices: ["JavaScript","Html","CSS"] ,
        answer: "JavaScript",
    },
];

//console.log(quiz);
//Until here it is correct

//How to run this program
const displayRandomQuiz = () => {
    //this function will give the user one of these questions at random
    let randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber){
        case 0:
            console.log("Who is the backend facilitator");
            break;
        case 1: 
            console.log("What program do you take in SheCanCode");
            break;
        case 2: 
            console.log("What is the main language used in backend");
            break;

    }
    //array to store the random multiplechoice questions
};

const scoringSystem = () => {
    let score = 0; // Initializing the start value of score

    if (quiz[0].answer.includes('Eric')) {
        score += 3;
    }

    if (quiz[1].answer.includes('Backend')) {
        score += 5;
    }

    if (quiz[2].answer.includes("JavaScript")) {
        score += 2;
    }

    console.log("Score:", score);
};
//how to manipulate this function   
const getUserAnswers = (answer, feedback) => {
    //input the users answer and console if the answer is correct or not
    if (quiz[0].answer[0] === 'Eric' || quiz[1].answer[1] === "Backend" || quiz[2].answer[2] === "JavaScript" ){
        feedback = "Correct Answer, Very Good!";
        console.log(feedback);
        
    }
    else{
        feedback = "Wrong answer!";
        console.log(feedback);
    }
};

const finalScore = (number) =>{
    //deepends on the number of the correct questions
    let sum = number.reduce ((acc, num) => acc + num, 0);
}


displayRandomQuiz();
scoringSystem();
getUserAnswers('Eric', quiz[2].answer[2]);
