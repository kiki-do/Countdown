const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");   


const majorDays = '14 May 2022';

function countdown(){
    const majorDaysDate = new Date(majorDays);
    const currentDate = new Date();

    const totalTime = (majorDaysDate - currentDate) / 1000;

    const days = Math.floor(totalTime / 3600 / 24);
    const hours = Math.floor(totalTime / 3600) % 24; 
    const minutes = Math.floor(totalTime / 60) % 60;  
    const seconds = Math.floor(totalTime) % 60;  

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;

}   

countdown();

setInterval(countdown, 1000);