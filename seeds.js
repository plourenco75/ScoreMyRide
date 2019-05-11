var mongoose = require('mongoose');
var Wavetype = require('./models/wavetype');

var data = [
    {
        name: "Beachie", description: "Shifting beachbreak with variable wave faces, lefts and rights",
        image: "https://www.surfertoday.com/images/stories/surfingaquitaine.jpg",
        supertube:  8.5,  superturn:  4.0, superhuman: 6.5,
        mediumtube: 4.0,  mediumturn: 2.0,
        smalltube:  2.0,  smallturn:  1.0
    },
    {
        name: "Pointbreak (Hollow)", description: "Long pointbreak with various barrel sections",
        image: "https://www.fijivacations.com/media/Tavarua-Cloudbreak-900x426.jpg",
        supertube:  5.0,  superturn:  3.0, superhuman: 5.5,
        mediumtube: 4.0,  mediumturn: 2.0,
        smalltube:  3.0,  smallturn:  1.0
    },
    {
        name: "Pointbreak (Performance)", description: "Long pointbreak with various sections for high performance manouevres and flow",
        image: "https://www.joliphotos.com/files/Joli%20Perfection%20Collection%20Posters/snapper_rocks_joli_qs9714.jpg",
        supertube:  8.5,  superturn:  4.0, superhuman: 6.5,
        mediumtube: 5.0,  mediumturn: 3.0,
        smalltube:  4.0,  smallturn:  2.0
    },
    {
        name: "Slab", description: "Short, intense extremely shallow and hollow wave for critical barrel-riding",
        image: "https://cdn.surfer.com/uploads/2017/04/LiquidIdeals_Teahupoo_Servais_2.jpg",
        supertube:  7.5,  superturn:  3.0, superhuman: 5.5,
        mediumtube: 3.0,  mediumturn: 1.5,
        smalltube:  1.5,  smallturn:  0.5
    }
]


function seedDB(){
    Wavetype.remove({'author.username': null}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("removed wavetypes");
            // add a few campgrounds
            data.forEach(function(seed){
                Wavetype.create(seed, function(err, wavetype){
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("added a wavetype");
                    }
                });
            });
        }
    });
    
    
};

module.exports = seedDB;