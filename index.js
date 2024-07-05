// http://api.weatherapi.com/v1/current.json?key=c53ccbc242a24f3ca78115939241002&q=Allahabad&aqi=yes

const image = document.getElementById("image");
const temp = document.getElementById("temp");
const date = document.getElementById("date");
const tempRange = document.getElementById("tempRange");

let monthArr = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"];
let dayArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

let curr = new Date;
let tareek = curr.getDate();
let month = monthArr[curr.getMonth()];
let minutes = curr.getMinutes();
let c = "AM";
let day = dayArr[curr.getDay()];
let hour = curr.getHours();
if(hour > 12){
    c = "PM";
    hour = hour - 12;
}
if(minutes < 10){
    minutes = "0" + minutes;
}
let s = `${day} | ${month} ${tareek} | ${hour}:${minutes} ${c}`;
date.innerText = s;