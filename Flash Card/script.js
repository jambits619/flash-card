let questions = [
    { q: "What does HTML stand for?", a: "HyperText Markup Language" },
    { q: "What is the purpose of CSS?", a: "To style the layout web pages" },
    { q: "What does JavaScript primarily do in web development?", a: "It adds interactivity and dynamic behavior to web pages" },
    { q: "What is variable in programming?", a: "A container used to store data values" },
    { q: "What is the function of a database in a web app?", a: "To store, retrieve, and manage application data" },
    { q: "What does API stand for?", a: "Application Programming Interface" },
    { q: "What is the difference between frontend and backend?", a: "Frontend handles the user interface, backend manages logic and data processing" },
    { q: "What is loop in programming?", a: "A structure that repeats a block of code multiple times" },
    { q: "What is debugging?", a: "The process of finding and fixing errors in code" },
    { q: "What is responsive design?", a: "Designing web pages to work well on different screen sizes and devices" }
];
let current = 1;
let total = questions.length;
let index = 0;

const flashQ = document.getElementById("question");
const flashA = document.getElementById("answer");
const flashCard = document.getElementById("card");
const flipBtn = document.getElementById("flipBtn");
const progress = document.getElementById("progress");

function progressBar() {
    const percent = ((index + 1 )/ questions.length) * 100;
    progress.style.width = percent + "%";
    progress.setAttribute("aria-valuenow", Math.round(percent));
    progress.setAttribute("data-value", percent);

    document.getElementById("progressPercent").textContent = percent + "%";
    document.getElementById("progressText").textContent = `${current} of ${total}`;
}

function updateCard() {
    flashQ.textContent = questions[index].q;
    flashA.textContent = questions[index].a;

    // reset the hide answer to show answer
    flashCard.classList.remove("flip");
    flipBtn.textContent = "SHOW ANSWER";
    
    progressBar();

}

function flipCard() {

    flashCard.classList.toggle("flip");
    
    flipBtn.textContent = 
        flashCard.classList.contains("flip") ? "HIDE ANSWER" : "SHOW ANSWER";

}

function nextQuestion() {
    if (index < questions.length - 1){
        index++;
        current++;
        updateCard();
    }
}

function prevQuestion() {
    if (index > 0){
        index--;
        current--;
        updateCard();
    }
}

// initial function calls
updateCard();