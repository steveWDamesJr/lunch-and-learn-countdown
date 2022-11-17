var deadline = new Date("November 18, 2022 16:30:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var t = deadline - now;
var Days = Math.floor(t / (1000 * 60 * 60 * 24));
var Hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var Minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var Seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("lunch&learn").innerHTML = Days + "d " 
+ Hours + "h " + Minutes + "m " + Seconds + "s";
    if (t < 0) {
        clearInterval(x);
        document.getElementById("lunch&learn").innerHTML = "Looks like you've missed the Nov 18, 2022 live lunch and learn. No worries! You check Microvere's YouTube channel for a recording of the event!";
    }
}, 1000);