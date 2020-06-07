
let dt = new Date();
let seconds = 0;
var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

function getDate() {
    seconds++;
    document.getElementById("display").innerHTML = seconds;
}

window.setInterval(getDate(), 1000);