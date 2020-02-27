function init() {
	let list = document.querySelectorAll('.list > li');
	console.log(list);

	list.forEach((elem, index, array) => {
		elem.addEventListener("click", function(){
			let parent = elem.parentNode;
			let childrens = parent.children;
			let childrenLen = childrens.length;
			console.log(" list " + parent);
			console.log("list ли " + index);
			console.log("all  li " + childrens);
			console.log("длинна list " + childrens.length);

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