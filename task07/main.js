function init() {
	let holder = document.querySelectorAll(".holder");
	holder.forEach((elem, index, array) => {
		let btn = elem.querySelector(".button");
		let box = elem.querySelector(".box");
		btn.addEventListener("click", function(){
			box.style.display = "none";
			elem.classList.toggle("active");
			if (elem.classList.contains("active")) {
				box.style.display = "block";
			}
		});	
	});
}

init();