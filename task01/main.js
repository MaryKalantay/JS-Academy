function init() {
  const div = document.getElementById('holder');
  const children = div.childNodes;

  children.forEach((index) => {
    index.className = "element";
  });
}

init();