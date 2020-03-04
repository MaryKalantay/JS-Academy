function init() {

	let btn = document.getElementById('btn');
	let item = document.querySelectorAll('ul > li');



  item.forEach((li, index, array) => {
    if(li.className == "active") {
      btn.onclick = () => {
        btn.innerHTML = "Stop";
        li.classList = "";
        li.nextElementSibling.classList = "active";
      }
    }
  });
}

init();