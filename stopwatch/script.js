let content = document.getElementById("content");
let lap = document.getElementById("lapButton");
let reset = document.getElementById("resetButton");
let start = document.getElementById("startButton");
let stop = document.getElementById("stopButton");
let div = document.getElementById("lapDiv");
let ms = 0, sec = 0, min = 0, hrs = 0;
let id, lapVar=0;

start.addEventListener("click", function () {
  clearInterval(id);
  id = setInterval(increment, 10);
  start.setAttribute("style", "display: none");
  stop.setAttribute("style", "display: inline");
});

lap.addEventListener("click", function () {
  lapVar++;
  div.innerHTML += `
    <div class="lapTime">
      Lap ${lapVar}                                  
      <span class="time">${content.innerHTML}</span>
    </div>
  `;
})

function increment() {
  ms++;
  if (ms / 100 == 1) {
    ms = 0;
    sec++;
  }
  if (sec / 60 == 1) {
    sec = 0;
    min++;
  }
  if (min / 60 == 1) {
    min = 0;
    hrs++;
  }
  content.innerHTML = `${hrs > 9 ? hrs : "0" + hrs}:${min > 9 ? min : "0" + min}:${sec > 9 ? sec : "0" + sec}:${ms > 9 ? ms : "0" + ms}`;
}

stop.addEventListener("click", function () {
  clearInterval(id);
  lap.setAttribute("style", "display: none");
  reset.setAttribute("style", "display: inline");
});

reset.addEventListener("click", function(){
  ms = 0; sec = 0; min = 0; hrs = 0;
  lapVar = 0;
  start.setAttribute("style", "display: inline");
  lap.setAttribute("style", "display: inline");
  reset.setAttribute("style", "display: none");
  stop.setAttribute("style", "display: none");
  div.innerHTML = "";
  content.innerHTML = "00:00:00:00";
});