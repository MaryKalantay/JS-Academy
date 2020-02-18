function initIdBlocks() {
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

function initChildBlocks() {
  const div = document.getElementById('list-holder');
  const blocks = div.childNodes;
  let Array = [];
  blocks.forEach((elem) =>  {
    Array.push(elem.offsetHeight);
  });
  let max = Math.max(...Array);
  blocks.forEach((elem) =>  {
    elem.style.height = max + "px";
  });
}

function initThree() {

}

initIdBlocks();
initChildBlocks();
initThree();