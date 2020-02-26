function init() {
	let list = document.querySelectorAll('.list > li');
	console.log(list);

	list.forEach((elem, index, array) => {
		elem.addEventListener("click", function(){
			alert(index,  liLen(elem));
		});
	});

	function liLen(list) {
		let list2 = list.querySelectorAll('li');
		let listLen = list2.length;
		return listLen;
	};
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