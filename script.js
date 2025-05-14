let startTime, interval;
let elapsed = 0;
const display = document.getElementById('display');
const laps = document.getElementById('laps');

function formatTime(ms) {
  let date = new Date(ms);
  return date.toISOString().substr(11, 12);
}

function updateDisplay() {
  display.textContent = formatTime(elapsed);
}

document.getElementById('start').onclick = () => {
  if (!interval) {
    startTime = Date.now() - elapsed;
    interval = setInterval(() => {
      elapsed = Date.now() - startTime;
      updateDisplay();
    }, 10);
  }
};

document.getElementById('pause').onclick = () => {
  clearInterval(interval);
  interval = null;
};

document.getElementById('reset').onclick = () => {
  clearInterval(interval);
  interval = null;
  elapsed = 0;
  updateDisplay();
  laps.innerHTML = '';
};

document.getElementById('lap').onclick = () => {
  if (interval) {
    const li = document.createElement('li');
    li.textContent = formatTime(elapsed);
    laps.appendChild(li);
  }
};

updateDisplay();
