let day = document.getElementById('day-l');
let hour = document.getElementById('hour-l');
let min = document.getElementById('min-l');
let sec = document.getElementById('sec-l');


function countDown(){
    
    let newYear = '19 Jun 2021';
    
    let date = new Date();
    let upDate = new Date(newYear);
    
    let totalSec = Math.floor((upDate - date) / 1000);
    
    
    let days = Math.floor(totalSec / 3600 / 24);
    let hours = Math.floor((totalSec / 3600) % 24);
    let minutes = Math.floor((totalSec / 60) % 60);
    let seconds = Math.floor((totalSec % 60));
    
    day.innerHTML = formatTime(days);
    hour.innerHTML = formatTime(hours);
    min.innerHTML = formatTime(minutes);
    sec.innerHTML = formatTime(seconds);
    
    
    }
    
    countDown();
    
    setInterval(countDown, 1000);


    function formatTime(time){
        return time < 10 ? (`0${time}`) : time;
    }