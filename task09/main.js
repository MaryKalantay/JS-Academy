let items = document.querySelectorAll('ul > li');
let currentItem = 0;
let play = true;
let btn = document.getElementById('btn');


function nextItem() {
  items[currentItem].className = "";
  currentItem = (currentItem + 1)%items.length;
  items[currentItem].className = "active";
}

function stopSlide() {
  btn.innerHTML = "PLAY";
  play = true;
  clearInterval(interval);
}

function playSlide() {
  btn.innerHTML = "STOP";
  interval = setInterval(nextItem, 1000);
  play = false;
}

btn.onclick = function() {
  if(play) {
    playSlide();
  }
  else {
    stopSlide();
  }
}