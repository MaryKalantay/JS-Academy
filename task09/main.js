function init() {

	let btn = document.getElementById('btn');
	let item = document.querySelectorAll('ul > li');

	item.forEach((li, index, array) => {
		btn.onclick = () => {
			btn.innerHTML = "Stop";
			li.classList = " ";	
			console.log(li[index++]);
			let prevSlide = li[index-1];
			li.classList = "active";
			prevSlide.className = "";
			console.log(li);		
		}
	})
	}

init();