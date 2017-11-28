//THE SCORE
var theScore = 0.0;
reset();

var scoreProfile = {};

//scoring button functions
$("#smturn").on("click", function(){
    updateScore(scoreProfile.smallturn);
});

$("#qktube").on("click", function(){
    updateScore(scoreProfile.smalltube);
});

$("#mdturn").on("click", function(){
    updateScore(scoreProfile.mediumturn);
});

$("#mdtube").on("click", function(){
    updateScore(scoreProfile.mediumtube);
});

$("#superhmn").on("click", function(){
    updateScore(scoreProfile.superhuman);
});

$("#superturn").on("click", function(){
    updateScore(scoreProfile.superturn);
});

$("#supertube").on("click", function(){
    updateScore(scoreProfile.supertube);
});

$("#reset").click(function(){
    reset();
});

$("#bonus").click(function(){
    updateScore(0.25);
});

$("#deduct").click(function(){
    updateScore(-0.5);
});

function updateScore(num) {
    theScore += num;
    if (theScore >= 10) {
        $("#thescore").css("color", "green");
        theScore = 10.0;
    }
    $("#thescore").text(theScore);
}

function reset() {
    theScore = 0;
    $("#thescore").text(theScore);
    $("#thescore").css("color", "black");
}


