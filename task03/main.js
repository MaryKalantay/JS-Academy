function init() {
	const lists = document.querySelector('.list')
	const firstElem = lists.firstElementChild;
	const lastElem = lists.lastElementChild;
	
	firstElem.className = "first";
	lastElem.className = "last";
}

init();