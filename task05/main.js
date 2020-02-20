function init() {
  let blocks = document.querySelectorAll('.list > li:nth-child(even)');
  let blocksAll = document.querySelectorAll('.list > li');
  
  console.log(blocks);
  console.log(blocksAll);
  blocks.forEach((elem) => {
    elem.classList.add("alt");
  });

  blocksAll.forEach((elem, index, array) => {
    elem.insertAdjacentHTML("afterBegin", '<span>' + index + '</span>');
  });  
}

init();