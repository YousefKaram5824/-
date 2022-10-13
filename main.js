var countDownDate = new Date('December 10, 2022 23:59:59').getTime();
var x = setInterval( function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var second = 1000;
    var minute = second *60;
    var hour = minute * 60;
    var day = hour * 24;

    var days = Math.floor(distance / (day));
    var hours = Math.floor(distance % (day) / (hour));
    var minutes = Math.floor(distance %(hour) / (minute));
    var seconds = Math.floor(distance % (minute) / (second));

    document.getElementById('day').innerHTML = days;
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = minutes;
    document.getElementById('second').innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById('day').innerHTML = "00";
        document.getElementById('hour').innerHTML = "00";
        document.getElementById('minute').innerHTML = "00";
        document.getElementById('second').innerHTML = "00";
        document.querySelector(".countdown").innerHTML = `<h2>𝓗𝓪𝓹𝓹𝔂 𝓑𝓲𝓻𝓽𝓱𝓭𝓪𝔂, 𝓑𝓸𝓼𝓼𝔂!❤️❤️❣️🥰🥳</h2>`;
    }

}, 1000);
