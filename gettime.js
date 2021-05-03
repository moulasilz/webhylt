var autorun = setInterval(function() {
    document.getElementById("date").innerHTML = Date();// get time normal
 }, 1000) ;
function upload() {
   document.getElementById("date").innerHTML = Date();
}
var autorun = setInterval(function() {
const a = new Date();
var mm = a.toLocaleString('en', { month: 'short' });
var y = a.getFullYear();
var d = a.getDate();
var h = a.getHours();
var m = a.getMinutes();
var s = a.getSeconds();
var gmt = -a.getTimezoneOffset() / 60;
var wd =a.getDay();
var weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
document.getElementById("demo").innerHTML =weekday[wd]+ " - " + mm + " " + d + " " + y + " " + h + ":" + m + ":" + s + " (GMT " + gmt+")";//get time self-set
}, 1000) ;