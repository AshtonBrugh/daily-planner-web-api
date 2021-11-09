var NowMoment = moment();
var eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment.format("dddd, MMMM Do YYYY, h:mm:ss:a");