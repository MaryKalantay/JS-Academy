function init() {
  let blocks = document.querySelectorAll('.list > li:nth-child(even)');
  let blocksAll = document.querySelectorAll('.list > li');
  
  console.log(blocks);
  console.log(blocksAll);
  blocks.forEach((elem) => {
    elem.classList.add("alt");
  });

  let span = "<span>" + 1  +  "</span>"

  blocksAll.forEach((elem) => {
    elem.insertAdjacentHTML("afterBegin", span);
  });  
}

init();