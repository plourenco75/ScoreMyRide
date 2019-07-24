//THE SCORE
var theScore = 0.0;
reset();

var scoreProfile = {};

function initScoreProfile(profile) {
    scoreProfile = profile;
}

//scoring button functions
$("#smturn").on("click", () => {
    updateScore(scoreProfile.smallturn);
});

$("#qktube").on("click", () => {
    updateScore(scoreProfile.smalltube);
});

$("#mdturn").on("click", () => {
    updateScore(scoreProfile.mediumturn);
});

$("#mdtube").on("click", () => {
    updateScore(scoreProfile.mediumtube);
});

$("#superhmn").on("click", () => {
    updateScore(scoreProfile.superhuman);
});

$("#superturn").on("click", () => {
    updateScore(scoreProfile.superturn);
});

$("#supertube").on("click", () => {
    updateScore(scoreProfile.supertube);
});

$("#reset").click(() => {
    reset();
});

$("#bonus").click(() => {
    updateScore(0.25);
});

$("#deduct").click(() => {
    updateScore(-0.5);
});


$("#redscore").click(() => {
    postScore('redscorebtn')
})
$("#whitescore").click(() => {
    postScore('whitescorebtn')
})
$("#bluescore").click(() => {
    postScore('bluescorebtn')
})
$("#blackscore").click(() => {
    postScore('blackscorebtn')
})
$("#purplescore").click(() => {
    postScore('purplescorebtn')
})
$("#yellowscore").click(() => {
    postScore('yellowscorebtn')
})


const postScore = (colourButton) => {
    const newRowHtml = 
        `<div class="col-sm-2">
            <button class="btn btn-default btn-lg btn-block ${colourButton}">${theScore}</button>
        </div>`
    $('#rashierow').append(newRowHtml)
    reset()
}

const updateScore = (num) => {
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


