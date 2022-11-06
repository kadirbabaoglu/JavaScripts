const time = new Date("jan 1,2023 00:00:00").getTime();

function calculateTime(){
    const nowTime = new Date().getTime();
    const remainderTime = time - nowTime;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24 ;

    const d = Math.floor(remainderTime / (day));
    const h = Math.floor((remainderTime % day) / hour);
    const m = Math.floor((remainderTime % hour) / minute);
    const s = Math.floor((remainderTime % minute) / second);

    document.getElementById("day").innerText = d;
    document.getElementById("hour").innerText = h;
    document.getElementById("minute").innerText = m;
    document.getElementById("second").innerText = s;


}

setInterval(function(){
    calculateTime();
},1000);