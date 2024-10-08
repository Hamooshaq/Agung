const questions = [
    { question: "In which year was Taylor Swift born?", answers: ["1987", "1989", "1990", "1992"], correct: "1989" },
    { question: "What is Taylor Swift's middle name?", answers: ["Alison", "Marie", "Elizabeth", "Ann"], correct: "Alison" },
    { question: "What was the title of Taylor Swift's first album?", answers: ["Fearless", "Speak Now", "Taylor Swift", "Red"], correct: "Taylor Swift" },
    { question: "Which song won Taylor Swift her first Grammy Award for Album of the Year in 2010?", answers: ["Love Story", "You Belong with Me", "White Horse", "Fearless"], correct: "Fearless" },
    { question: "Which Taylor Swift album features the song 'Blank Space'?", answers: ["1989", "Red", "Reputation", "Lover"], correct: "1989" },
    { question: "Which movie did Taylor Swift appear in 2010?", answers: ["Valentine's Day", "The Giver", "Cats", "The Lorax"], correct: "Valentine's Day" },
    { question: "Which song is the lead single from Taylor Swift's album 'Reputation'?", answers: ["Look What You Made Me Do", "...Ready for It?", "Gorgeous", "Delicate"], correct: "Look What You Made Me Do" },
    { question: "Which Taylor Swift song includes the lyrics 'We are never ever ever getting back together'?", answers: ["Back to December", "I Knew You Were Trouble", "We Are Never Ever Getting Back Together", "22"], correct: "We Are Never Ever Getting Back Together" },
    // { question: "In which year did Taylor Swift release her album 'Red'?", answers: ["2010", "2012", "2014", "2016"], correct: "2012" },
    // { question: "Which Taylor Swift album won the Grammy Award for Album of the Year in 2016?", answers: ["1989", "Red", "Speak Now", "Reputation"], correct: "1989" },
    // { question: "Which song from the album 'Lover' features Brendon Urie?", answers: ["ME!", "The Man", "You Need to Calm Down", "Lover"], correct: "ME!" },
    // { question: "What is the title of Taylor Swift's 2020 surprise album?", answers: ["Lover", "Folklore", "Evermore", "Fearless (Taylor's Version)"], correct: "Folklore" },
    // { question: "Which song by Taylor Swift features the lyrics 'I knew you were trouble when you walked in'?", answers: ["Style", "Bad Blood", "I Knew You Were Trouble", "Shake It Off"], correct: "I Knew You Were Trouble" },
    // { question: "Which Taylor Swift album was re-recorded and released in 2021?", answers: ["Fearless", "Speak Now", "Red", "1989"], correct: "Fearless" },
    // { question: "Which song did Taylor Swift write for the soundtrack of 'The Hunger Games'?", answers: ["Safe & Sound", "Eyes Open", "Both of Us", "Ronan"], correct: "Safe & Sound" },
    // { question: "In which year did Taylor Swift win the MTV Video Music Award for Best Female Video for 'You Belong with Me'?", answers: ["2008", "2009", "2010", "2011"], correct: "2009" },
    // { question: "Which Taylor Swift music video features a cameo by actor Sean O'Pry?", answers: ["Bad Blood", "Blank Space", "Wildest Dreams", "Style"], correct: "Blank Space" },
    // { question: "What is the name of Taylor Swift's documentary released on Netflix in 2020?", answers: ["Miss Americana", "The Long Pond Studio Sessions", "Folklore: The Long Pond Studio Sessions", "Taylor Swift: Reputation Stadium Tour"], correct: "Miss Americana" },
    // { question: "Which song did Taylor Swift collaborate on with Ed Sheeran for her album 'Red'?", answers: ["Everything Has Changed", "The Last Time", "End Game", "Run"], correct: "Everything Has Changed" },
    // { question: "In which year did Taylor Swift release her album 'Evermore'?", answers: ["2018", "2019", "2020", "2021"], correct: "2020" } 
];

let currentQuestionIndex = 0;
let score = 0;
const userAnswers = Array(questions.length).fill(null);

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('answer-button');
        button.onclick = () => selectAnswer(answer);
        if (userAnswers[currentQuestionIndex] === answer) {
            button.classList.add('selected');
        }
        answersDiv.appendChild(button);
    });
    document.getElementById('back-btn').style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
    document.getElementById('next-btn').innerText = currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next';
}

function selectAnswer(answer) {
    userAnswers[currentQuestionIndex] = answer;
    showQuestion();
}

function nextQuestion() {
    if (userAnswers[currentQuestionIndex] !== null) {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            showResults();
        }
    } else {
        alert('Please select an answer before proceeding.');
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function showResults() {
    userAnswers.forEach((answer, index) => {
        if (answer === questions[index].correct) {
            score++;
        }
    });
    window.location.href = `result.html?score=${score}&total=${questions.length}`;
}

document.addEventListener('DOMContentLoaded', () => {
    showQuestion();
});
