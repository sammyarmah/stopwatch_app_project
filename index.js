const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");
const stopButton = document.getElementById("stopButton");
let [seconds, minutes, hours] = [0, 0, 0];
let displayTimer = document.getElementById("displayTimer");
let timer = null;

startButton.onclick = startWatch;
stopButton.onclick = stopWatch;
resetButton.onclick = resetWatch;


function timerWatch(){
  seconds ++;
  if(seconds == 60){
    seconds = 0;
    minutes ++;

    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours:hours;
  let m = minutes < 10 ? "0" + minutes:minutes;
  let s = seconds < 10 ? "0" + seconds:seconds;


  displayTimer.innerHTML = h + ":"+ m +":"+ s;
}

function startWatch() {
  if(timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(timerWatch, 1000);
}

function stopWatch() {
  clearInterval(timer);
}

function resetWatch(){
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTimer.innerHTML = "00:00:00";
}
