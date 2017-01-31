var timer = document.getElementById("timer");
var countDown = 10;
timer.textContent = countDown + 1;
var intervalId;

function.updateTime() {
    timer.textContent = countDown;
    countDown--;
    if (countDown < 0) {
        clearInterval(intervalId);
        timer.style.color = white;
        var audio = new Audio('explode.mp3')
        audio.play();
    }
}

intervalId = setInterval(updateTime, 1000);