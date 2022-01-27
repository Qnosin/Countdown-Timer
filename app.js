const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

const Time = new Timer();

setInterval(()=>{
    Time.setTimer([hours,minutes,seconds]);
},1000)


