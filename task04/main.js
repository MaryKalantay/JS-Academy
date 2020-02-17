function initFirst() {
  const blocks = document.querySelectorAll('[id*="block"]');
  let Array = [];
  blocks.forEach((elem) =>  {
    Array.push(elem.offsetHeight);
  });
  let max = Math.max(...Array);
  blocks.forEach((elem) =>  {
    elem.style.height = max + "px";
  });
}

function initSecond() {

}

function initThree() {

}

initFirst();
initSecond();
initThree();