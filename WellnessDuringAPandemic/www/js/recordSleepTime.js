const dayOfTheWeek = new Array(7);
dayOfTheWeek[0] = "Sun";
dayOfTheWeek[1] = "Mon";
dayOfTheWeek[2] = "Tue";
dayOfTheWeek[3] = "Wed";
dayOfTheWeek[4] = "Thu";
dayOfTheWeek[5] = "Fri";
dayOfTheWeek[6] = "Sat";

const monthStrings = new Array(12);
monthStrings[0] = "Jan";
monthStrings[1] = "Feb";
monthStrings[2] = "Mar";
monthStrings[3] = "Apr";
monthStrings[4] = "May";
monthStrings[5] = "June";
monthStrings[6] = "July";
monthStrings[7] = "Aug";
monthStrings[8] = "Sep";
monthStrings[9] = "Oct";
monthStrings[10] = "Nov";
monthStrings[11] = "Dec";

//Define var to hold setInterval() function
let interval = null;

let startSleep;
let endSleep;

//Define var to hold stopwatch status
let status = "stopped";


//Stopwatch function (logic to determine when to increment next value, etc.)
function Clock(){
    //Date
    let dt = new Date();

    //Display updated time values to user
    document.getElementById("display").innerHTML = formatAMPM(dt);
    document.getElementById("calendar").innerHTML = formatCalendar(dt);

}

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

function formatCalendar(date) {
    var month = date.getMonth();
    var dateNumber = date.getDate();
    var year = date.getFullYear();
    var day = date.getDay();

    var strCal = monthStrings[month] + ' ' + dateNumber + ', ' + year + ' (' + dayOfTheWeek[day] + ')';
    return strCal;
}

function startStop(){

    if(status === "stopped"){
        //Start the stopwatch (by calling the setInterval() function)
        document.getElementById("startStop").innerHTML = "Wake Up";
        document.getElementById("nightnight").innerHTML = "Good Night!"+ " We have started to record your sleep time.";
        status = "started";
        let temp = new Date()
        startSleep = temp.getHours() + minToHours(temp.getMinutes());

    }
    else if (status === "started") {
        document.getElementById("startStop").innerHTML = "Sleep Recorded!";
        document.getElementById("nightnight").innerHTML = "Good morning. Read below for your sleeping statistics:";
        status = "finished";
        let temp = new Date()
        endSleep = temp.getHours() + minToHours(temp.getMinutes());

    }

}

function minToHours(min) {
    var hours = (min / 60);
    return hours;
    }

interval = window.setInterval(Clock, 1);