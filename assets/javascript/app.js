var userAnsArr = [];
var AnsArr = [];
var numCorrect = 0;
var numIncorrect = 0;
var numUnanswered = 0;

timeout = setTimeout(checkAnswers,120000); //if user doesn't submit in 120 seconds, do it automatically

$(document).ready(function (){
    $(".submit").on("click",function (){
        clearTimeout(timeout); //if the submit button is clicked then stop the timer
        console.log($("input[name='q1']:checked").val());
        userAnsArr.push($("input[name='q1']:checked").val());
        if(!$(".question").is(':checked')){
            alert("checked");
        }
        console.log(userAnsArr);
        checkAnswers(userAnsArr);
    }); //click ends here
});//doucment ends here

function checkAnswers(userAnsArr) {
    for (var i = 0; i < userAnsArr.length; i++){
        if (userAnsArr[i] === AnsArr[i]) {
            numCorrect += 1;
        }
        else if (userAnsArr[i] === "undefined") {
            numUnanswered += 1;
        }else {
            numIncorrect += 1;
        }
    }
    return numCorrect;
}
