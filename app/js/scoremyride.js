//THE SCORE
var theScore = 0.0;
$("#thescore").html(theScore);

//default score profile (shifting beachie)
var beachies = {supertube:  8.5,  superturn:  6.0, superhuman: 8.5,
                mediumtube: 6.0,  mediumturn: 4.0,
                smalltube:  4.0,  smallturn:  2.0};
var longHollowPoint = {supertube:  8.5,  superturn:  6.0, superhuman: 8.5,
                       mediumtube: 6.0,  mediumturn: 4.0,
                       smalltube:  4.0,  smallturn:  2.0};
var longPerformancePoint = {supertube:  8.5,  superturn:  6.0, superhuman: 8.5,
                            mediumtube: 6.0,  mediumturn: 4.0,
                            smalltube:  4.0,  smallturn:  2.0};
var shortHollowSlab = {supertube:  8.5,  superturn:  6.0, superhuman: 8.5,
                       mediumtube: 6.0,  mediumturn: 4.0,
                       smalltube:  4.0,  smallturn:  2.0};

$(".wavetype").on("click", function(){
    $(".wavetype").removeClass("active");
    $(this).toggleClass("active");
});

