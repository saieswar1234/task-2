

let startTime;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
  const date = new Date(time);
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(Math.floor(date.getUTCMilliseconds() / 10)).padStart(2, '0');
  return `${minutes}:${seconds}:${milliseconds}`;
}

function print(txt) {
  document.getElementById("display").innerHTML = txt;
}

function startStop() {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      print(timeToString(elapsedTime));
    }, 10);
  }
}

function pause() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function reset() {
  clearInterval(timerInterval);
  print("00:00:00");
  elapsedTime = 0;
  timerInterval = null;
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  if (elapsedTime > 0) {
    const lapTime = timeToString(elapsedTime);
    const lapList = document.getElementById("laps");
    const li = document.createElement("li");
    li.innerText = lapTime;
    lapList.appendChild(li);
  }
}

