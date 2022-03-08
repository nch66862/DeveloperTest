function randomizeTest(test) {
    console.log("hey it started");
    let currentIndex = test.questions.length;
    let randomIndex;
    let currentQuestion;
    let currentChoices;
    let currentAnswers;
    const questions = test.questions;
    const choices = test.choices;
    const answers = test.answers;


    // While there remain elements to shuffle…
    while (currentIndex) {

        // Pick a remaining element…
        randomIndex = Math.floor(Math.random() * currentIndex--);

        // And swap it with the current element.
        currentQuestion = questions[currentIndex];
        questions[currentIndex] = questions[randomIndex];
        questions[randomIndex] = currentQuestion;

        currentChoices = choices[currentIndex];
        choices[currentIndex] = choices[randomIndex];
        choices[randomIndex] = currentChoices;

        currentAnswers = answers[currentIndex];
        answers[currentIndex] = answers[randomIndex];
        answers[randomIndex] = currentAnswers;

        //I think because things are switching around, it would be best to randomize first? Or a different index?

        randomizeAnswers(currentChoices, currentAnswers);
    }

    return test;
}

const randomizeAnswers = (currentChoices, currentAnswers) => {
    let currentIndex = currentChoices.length;
    let randomIndex;
    let currentChoice;
    let currentAnswer;

    while (currentIndex) {
        // Pick a remaining element…
        randomIndex = Math.floor(Math.random() * currentIndex--);

        // And swap it with the current element.
        currentChoice = currentChoices[currentIndex];
        currentChoices[currentIndex] = currentChoices[randomIndex];
        currentChoices[randomIndex] = currentChoice;

        currentAnswer = currentAnswers[currentIndex];
        currentAnswers[currentIndex] = currentAnswers[randomIndex];
        currentAnswers[randomIndex] = currentAnswer;
    }
}

function Test(questions, choices, answers) {
    this.questions = questions;
    this.choices = choices;
    this.answers = answers;
}

const questions = [
    "What can you find in Rustici Software's office?",
    "All of Rustici Software employees are expected to work no more than ____ hours per week.",
    "The end users of Rustici Software's products number in the _________",
    "Rustici Software is a (choose all that apply):",
    "Tim likes to wear:"
]

const choices = [
    [
        "Dart Board",
        "Ping Pong Table",
        "Cubicles",
        "Laptops with dual monitors",
        "TPS reports, ummm yeah"
    ],
    [
        "80",
        "40",
        "50",
        "60"
    ],
    [
        "Tens",
        "Hundreds",
        "Thousands",
        "Millions",
        "Billions"
    ],
    [
        "Great place to work",
        "Respected leader in its field",
        "Place where people don't matter, just results"
    ],
    [
        "Capri pants",
        "Goth attire",
        "Sport coat",
        "T-shirt and shorts"
    ]
]

const answers = [
    [1, 1, 0, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0],
    [0, 0, 0, 1, 0]
]

const test = new Test(questions, choices, answers);

randomizeTest(test);
