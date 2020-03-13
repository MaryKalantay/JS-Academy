let items = document.querySelectorAll('ul > li');
let currentItem = 0;
let play = true;
let btn = document.getElementById('btn');

let interval = setInterval(nextItem, 5000);

function nextItem() {
  items[currentItem].className = "";
  currentItem = (currentItem + 1)%items.length;
  items[currentItem].className = "active";
}

function stopSlide() {
  btn.innerHTML = "STOP";
  play = false;
  clearInterval(interval);
}

function playSlide() {
  btn.innerHTML = "PLAY";
  play = true;
  interval = setInterval(nextItem, 5000);
}

btn.onclick = function() {
  if(play) {
    stopSlide();
  }
  else {
    playSlide();
  }
}