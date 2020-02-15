function init() {
  let div = document.getElementById('holder');
  let children = div.childNodes;
  console.log(children);
  for (let i = 0; i < children.length; i++) {
    children[i].className = "element";
  }
}

init();