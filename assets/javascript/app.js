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
    for(var i = 0; i < trivia.length; i++) {
        console.log("userans: ", trivia[i].userAns);
        if(trivia[i].userAns === trivia[i].correctAns) {
            numCorrect += 1;
        }
        else if(trivia[i].userAns === undefined) {
            numUnanswered += 1;
        } 
        else {
            numIncorrect += 1;
        }
    }
    return numCorrect, numUnanswered, numIncorrect;
}

$(document).ready(function () {
    $(".questions").hide();
    $(".results").hide();
    $(".submit").hide();
    
    $(".start").on("click",function() {
        $(".start").hide();
        $(".questions").show();
        $(".submit").show();
    });//start ends here

    $(".submit").on("click", function () {
        $(".questions").hide();
        $(".results").show();
        $(".submit").hide();
        //looping through the inputs (buttons) and then getting each checked value and putting it in userAns property of trivia
        for(var i  = 0; i < trivia.length; i++) {
            trivia[i].userAns = $('input[name="question'+i+'"]:checked').val()
            // console.log($('input[name="question'+i+'"]:checked').val());
            // console.log("trivia.userans: ", trivia[i].userAns);
        }
        checkAnswers();
        // console.log("correct: ", numCorrect);
        // console.log("incorr: ", numIncorrect);
        // console.log("unans: ", numUnanswered);
        $(".numCorrect").text(numCorrect);
        $(".numIncorrect").text(numIncorrect);
        $(".numUnanswered").text(numUnanswered);
    }); //submit ends here
}); //doucment ends here

/*
       console.log($("input[name='q1']:checked").val());
        userAnsArr.push($("input[name='q1']:checked").val());
        userAnsArr.push($("input[name='q2']:checked").val());

*/