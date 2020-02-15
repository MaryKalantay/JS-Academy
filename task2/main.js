function init() {
	const list = document.getElementById('list-holder');
	const items = list.querySelectorAll('li');

	items.forEach((elem, i, items) => {
		const imgs = elem.querySelector('img');
		const currWidth = imgs.clientWidth;
        const currHeight = imgs.clientHeight;
		imgs.style.marginLeft = "-" +  currWidth/2 + "px";
		imgs.style.marginTop = "-" + currHeight/2 + "px";
	});
}

init();