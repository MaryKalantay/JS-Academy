function init() {
	let list = document.querySelectorAll('.list > li');
	console.log(list);

	list.forEach((elem, index, array) => {
		elem.addEventListener("click", function(){
			let parent = elem.parentNode;
			let childrens = parent.children;
			console.log("первый список " + parent);
			console.log("номер ли " + index);
			console.log("дети первого списка " + childrens);
			console.log("длинна первого списка " + childrens.length);

			let innerList = elem.querySelectorAll("ul > li");
			console.log("внутренний список " + innerList);

			
		});
	});
}

init();


// let list = document.querySelectorAll('.list > li');
	
//   console.log(list);
//   list.forEach((elem, index, array) => {
//     elem.addEventListener("click", function(){
//       let list2 = elem.querySelectorAll(' ul > li');
//       let list2Len = list2.length;
//       alert( index, list2Len);
//     });
//   });