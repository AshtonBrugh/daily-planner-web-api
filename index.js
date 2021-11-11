var NowMoment = moment();
var eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment.format("dddd, MMMM Do YYYY, h:mm:ss:a");

var timeNow = moment().hour();
console.log

//adding the background colors to indicate the time of day
$(".row").each(function(i, obj){
    $(this).children().first()  
    var time = parseInt(i);
    

    if(time + 9 > timeNow){
        $(this).children('textarea.col-6').addClass("bg-success");
    }
    if (time + 9 < timeNow){
        $(this).children('textarea.col-6').addClass("bg-secondary");
    }
    if (time + 9 == timeNow){
        $(this).children('textarea.col-6').addClass("bg-danger");
    }

})





