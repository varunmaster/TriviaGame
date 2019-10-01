userAnsArr = [];
AnsArr = [];
numCorrect = 0;

$(document).ready(function (){
    $(".submit").on("click",function (){
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
    }
    return numCorrect;
}
