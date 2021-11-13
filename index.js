var NowMoment = moment();
var eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment.format("dddd, MMMM Do YYYY, h:mm:ss:a");


var timeNow = moment().hour();


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

});


 //saving user inputs to local storage 
 //9 AM
function saveTextNine(event) {
    event.preventDefault();
    var text = document.getElementById("userInputNine").value;
    var dailyText = {
        textNine: text.trim()
    }

    localStorage.setItem("nineText", JSON.stringify(dailyText));

};

//save button
var saveButton = document.getElementById("saveNine");
saveButton.addEventListener('click', saveTextNine);

var textContent = (JSON.parse(localStorage.getItem("nineText")));

$("div[data-time='9'] textarea").val(textContent.textNine);
console.log((JSON.parse(localStorage.getItem("nineText"))));

 //10 AM
 function saveTextTen(event) {
    event.preventDefault();
    var text = document.getElementById("userInputTen").value;
    var dailyText = {
        textTen: text.trim()
    }

    localStorage.setItem("tenText", JSON.stringify(dailyText));

};

//save button
var saveButton = document.getElementById("saveTen");
saveButton.addEventListener('click', saveTextTen);

var textContent = (JSON.parse(localStorage.getItem("tenText")));

$("div[data-time='10'] textarea").val(textContent.textTen);
console.log((JSON.parse(localStorage.getItem("tenText"))));


//11 AM
function saveTextEleven(event) {
    event.preventDefault();
    var text = document.getElementById("userInputEleven").value;
    var dailyText = {
        textEleven: text.trim()
    }

    localStorage.setItem("elevenText", JSON.stringify(dailyText));

};

//save button
var saveButton = document.getElementById("saveEleven");
saveButton.addEventListener('click', saveTextEleven);

var textContent = (JSON.parse(localStorage.getItem("elevenText")));

$("div[data-time='11'] textarea").val(textContent.textEleven);


//12 PM
function saveTextTwelve(event) {
    event.preventDefault();
    var text = document.getElementById("userInputTwelve").value;
    var dailyText = {
        textTwelve: text.trim()
    }

    localStorage.setItem("twelveText", JSON.stringify(dailyText));

};

//save button
var saveButton = document.getElementById("saveTwelve");
saveButton.addEventListener('click', saveTextTwelve);

var textContent = (JSON.parse(localStorage.getItem("twelveText")));

$("div[data-time='12'] textarea").val(textContent.textTwelve);


//1 PM
function saveTextOne(event) {
    event.preventDefault();
    var text = document.getElementById("userInputOne").value;
    var dailyText = {
        textOne: text.trim()
    }

    localStorage.setItem("oneText", JSON.stringify(dailyText));

};

//save button
var saveButton = document.getElementById("saveOne");
saveButton.addEventListener('click', saveTextOne);

var textContent = (JSON.parse(localStorage.getItem("oneText")));

$("div[data-time='13'] textarea").val(textContent.textOne);

//2 PM
function saveTextTwo(event) {
    event.preventDefault();
    var text = document.getElementById("userInputTwo").value;
    var dailyText = {
        textTwo: text.trim()
    }

    localStorage.setItem("twoText", JSON.stringify(dailyText));

};

//save button
var saveButton = document.getElementById("saveTwo");
saveButton.addEventListener('click', saveTextTwo);

var textContent = (JSON.parse(localStorage.getItem("twoText")));

$("div[data-time='14'] textarea").val(textContent.textTwo);

//3 PM
function saveTextThree(event) {
    event.preventDefault();
    var text = document.getElementById("userInputThree").value;
    var dailyText = {
        textThree: text.trim()
    }

    localStorage.setItem("threeText", JSON.stringify(dailyText));

};

//save button
var saveButton = document.getElementById("saveThree");
saveButton.addEventListener('click', saveTextThree);

var textContent = (JSON.parse(localStorage.getItem("threeText")));

$("div[data-time='15'] textarea").val(textContent.textThree);

//4 PM
function saveTextFour(event) {
    event.preventDefault();
    var text = document.getElementById("userInputFour").value;
    var dailyText = {
        textFour: text.trim()
    }

    localStorage.setItem("fourText", JSON.stringify(dailyText));

};

//save button
var saveButton = document.getElementById("saveFour");
saveButton.addEventListener('click', saveTextFour);

var textContent = (JSON.parse(localStorage.getItem("fourText")));

$("div[data-time='16'] textarea").val(textContent.textFour);

//5 PM
function saveTextFive(event) {
    event.preventDefault();
    var text = document.getElementById("userInputFive").value;
    var dailyText = {
        textFive: text.trim()
    }

    localStorage.setItem("fiveText", JSON.stringify(dailyText));

};

//save button
var saveButton = document.getElementById("saveFive");
saveButton.addEventListener('click', saveTextFive);

var textContent = (JSON.parse(localStorage.getItem("fiveText")));

$("div[data-time='17'] textarea").val(textContent.textFive);



















