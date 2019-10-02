var userAnsArr = [];
var AnsArr = [];
var numCorrect = 0;
var numIncorrect = 0;
var numUnanswered = 0;

var trivia = [{
    question: "What is 1+1?",
    options: [0, 1, 2, 3],
    userAns: "",
    correctAns: "2"
}, {
    question: "What is 2+2?",
    options: [10, 11, 4, 3],
    userAns: "",
    correctAns: "4"
}, {
    question: "What is 12+1?",
    options: [10, 11, 42, 13],
    userAns: "",
    correctAns: "13"
}, {
    question: "What is 10+10?",
    options: [10, 11, 20, 30],
    userAns: "",
    correctAns: "20"
}, {
    question: "What is 15+15?",
    options: [40, 10, 20, 30],
    userAns: "",
    correctAns: "30"
}];

//creating and calling a function to display the questions from the trivia objectarray
displayQuestions(0);
displayQuestions(1);
displayQuestions(2);
displayQuestions(3);
displayQuestions(4);

function displayQuestions(num) {
    // console.log("trivia question is: ", trivia[num].question);
    $(".question." + num).prepend('<p>' + trivia[num].question + '</p>');
}

//looping through my trivia object arry and then looping through the options array to display each as a button
for (var i = 0; i < trivia.length; i++) {
    for (var j = 0; j < trivia[i].options.length; j++)
        $(".answer." + i).append('<input type="radio" name=question' + i + ' value='+trivia[i].options[j]+' > ' + trivia[i].options[j] + ' <br>');
}

function checkAnswers() {
    for(var i = 0; i < trivia.length; i++){
        console.log()
        if(trivia[i].userAns === trivia[i].correctAns) {
            return numCorrect += 1;
        }
        else if(trivia[i].userAns === undefined) {
            return numUnanswered += 1;
        } 
        else {
            return numIncorrect += 1;
        }
    }
}

$(document).ready(function () {
    $(".submit").on("click", function () {
        //looping through the inputs (buttons) and then getting each checked value and putting it in userAns property of trivia
        for(var i  = 0; i < trivia.length; i++) {
            trivia[i].userAns = $('input[name="question'+i+'"]:checked').val()
            // console.log($('input[name="question'+i+'"]:checked').val());
            // console.log("trivia.userans: ", trivia[i].userAns);
        }
        checkAnswers();
        console.log("correct: ", numCorrect);
        console.log("incorr: ", numIncorrect);
        console.log("unans: ", numUnanswered);
        $(".numCorrect").text(numCorrect);
        $(".numIncorrect").text(numIncorrect);
        $(".numUnanswered").text(numUnanswered);
    }); //click ends here
}); //doucment ends here
/*

timeout = setTimeout(checkAnswers,120000); //if user doesn't submit in 120 seconds, do it automatically

$(document).ready(function (){
    $(".submit").on("click",function (){
        clearTimeout(timeout); //if the submit button is clicked then stop the timer
        console.log($("input[name='q1']:checked").val());
        userAnsArr.push($("input[name='q1']:checked").val());
        userAnsArr.push($("input[name='q2']:checked").val());
        // if(!$(".question").is(':checked')){
        //     alert("checked");
        // }
        console.log(userAnsArr);
        checkAnswers(userAnsArr);
        console.log("numCorrect: " + numCorrect);
        console.log("numIncorr: " + numIncorrect);
        console.log("numUnans: " + numUnanswered);
    }); //click ends here
});//doucment ends here

function checkAnswers(userAnsArr) {
    for (var i = 0; i < userAnsArr.length; i++){
        if (userAnsArr[i] === AnsArr[i]) {
            return numCorrect += 1;
        }
        else if (userAnsArr[i] === undefined) {
            return numUnanswered += 1;
        }else {
            return numIncorrect += 1;
        }
    }
}
*/