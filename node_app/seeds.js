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


// var data = [
//     {
//         name: "Cloud's Rest",
//         image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, mauris et bibendum malesuada, metus metus aliquet nunc, a vulputate erat ipsum nec nibh. Praesent aliquam turpis augue, vitae volutpat justo bibendum at. Vivamus erat nunc, venenatis ut facilisis id, commodo in nunc. Sed et malesuada nibh. Fusce placerat, metus eu varius bibendum, justo lacus blandit nulla, vel gravida dui magna nec urna. Quisque hendrerit justo vitae neque pellentesque, in tempor nisi vulputate. Cras dignissim sem ac elit gravida eleifend. "
//     },
//     {
//         name: "Desert Mesa",
//         image: "https://farm4.staticflickr.com/3859/15123592300_6eecab209b.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, mauris et bibendum malesuada, metus metus aliquet nunc, a vulputate erat ipsum nec nibh. Praesent aliquam turpis augue, vitae volutpat justo bibendum at. Vivamus erat nunc, venenatis ut facilisis id, commodo in nunc. Sed et malesuada nibh. Fusce placerat, metus eu varius bibendum, justo lacus blandit nulla, vel gravida dui magna nec urna. Quisque hendrerit justo vitae neque pellentesque, in tempor nisi vulputate. Cras dignissim sem ac elit gravida eleifend. "
//     },
//     {
//         name: "Canyon Floor",
//         image: "https://farm4.staticflickr.com/189/493046463_841a18169e.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, mauris et bibendum malesuada, metus metus aliquet nunc, a vulputate erat ipsum nec nibh. Praesent aliquam turpis augue, vitae volutpat justo bibendum at. Vivamus erat nunc, venenatis ut facilisis id, commodo in nunc. Sed et malesuada nibh. Fusce placerat, metus eu varius bibendum, justo lacus blandit nulla, vel gravida dui magna nec urna. Quisque hendrerit justo vitae neque pellentesque, in tempor nisi vulputate. Cras dignissim sem ac elit gravida eleifend. "
//     }
// ]

function seedDB(){
    Wavetype.remove({}, function(err){
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
                        // create a comment
                        // Comment.create(
                        //     {
                        //         text: "great spot, but no internet! :( ",
                        //         author: "Homer"
                        //     }, function (err, comment){
                        //         if (err){
                        //             console.log(err);
                        //         } else {
                        //             campground.comments.push(comment);
                        //             campground.save();
                        //             console.log("created a new comment");
                        //         }
                        // });
                    }
                });
            });
        }
    });
    
    
};

module.exports = seedDB;