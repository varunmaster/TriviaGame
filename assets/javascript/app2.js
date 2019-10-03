var numCorrect = 0;
var numIncorrect = 0;
var numUnanswered = 0;
var timeLeft = 60;
var intervalId;
var questionCnt = 0;
//var audio = new Audio('assets/javascript/TheOffice.mp3');

var trivia = [{
    question: "1. In the TV show 'The Office', who is the regional manager?",
    options: ["Michael Scott", "Jim Halpert", "Pam Beasely", "Dwight Schrute"],
    userAns: "",
    correctAns: "Michael Scott"
}, {
    question: "2. What special event does Michael host for his employees every year?",
    options: ["The Mifflins", "The Dunflies", "The Miffies", "The Dundies"],
    userAns: "",
    correctAns: "The Dundies"
}, {
    question: "3. How does Michael save Meredith from rabies?",
    options: ["Hits her with his car", "He lends her money for an operation", "He stops her from taking too many painkillers", "He drives her mom after the Christian fiasco"],
    userAns: "",
    correctAns: "Hits her with his car"
}, {
    question: "4. Who does Michael marry?",
    options: ["Pam", "Jan", "Holly", "Angela"],
    userAns: "",
    correctAns: "Holly"
}, {
    question: "5. If Michael had a gun with two bullets and was in a room with Hitler, Bin Laden, and Toby, what would he do?",
    options: ["Shoot Hitler and Bin Laden", "Shoot Toby twice", "Shoot Hitler twice", "Shoot Bin Laden twice"],
    userAns: "",
    correctAns: "Shoot Toby twice"
}, {
    question: "6. Complete the quote: 'I love inside jokes...'",
    options: ["... I'd love to be a part of one someday", "... But no one likes it when I explain it to them", "... But I don't understand them", "... Do you want to have an inside joke with me?"],
    userAns: "",
    correctAns: "... I'd love to be a part of one someday"
}, {
    question: "7. Which of the following movies did Michael write, produce, direct, and star in?",
    options: ["Hockey Sticks: Ignite", "The Best Boss: Chronicles", "Threat Level Midnight", "Somehow, I Manage"],
    userAns: "",
    correctAns: "Threat Level Midnight"
}, {
    question: "8. Where does Michael move to with Holly?",
    options: ["New York", "Wyoming", "Arizona", "Colorado"],
    userAns: "",
    correctAns: "Colorado"
}, {
    question: "9. What was the name of Angela's sick cat that Dwight killed?",
    options: ["Sprinkles", "Mr. Longwhiskers", "Princess Puss", "Kitty"],
    userAns: "",
    correctAns: "Sprinkles"
}, {
    question: "10. What is Michael's favorite joke of all time?",
    options: ["Your mama's so fat!", "That's what she said", "Can I have some fries with that shake?", "You sound like my grandma!"],
    userAns: "",
    correctAns: "That's what she said"
}];


//function to display the question and the answer choices
function displayQuestion(num) {
    $(".question").html('<p>' + trivia[num].question + '</p>');
    for (var j = 0; j < trivia[num].options.length; j++) {
        $(".answer." + j).html('<input type="radio" class ="question" name="question' + num + '" value="' + trivia[num].options[j] + '" > ' + trivia[num].options[j] + ' <br>');
        // console.log("here: ", trivia[i].options[j]);
    }
}

$(".answer").on("click", function () {
    //looping through the options and updating the trivia.userAns 
    for (var i = 0; i < trivia.length; i++) {
        trivia[questionCnt].userAns = $('input[name="question' + i + '"]:checked').val();
    }
});

displayQuestion(0);
displayQuestion(1);