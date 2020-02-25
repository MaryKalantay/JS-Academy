function init() {
  let list = document.querySelectorAll('.list > li');
  
  console.log(list);
  list.forEach((elem, index, array) => {
    elem.addEventListener("click", function(){
      let list2 = elem.querySelectorAll(' ul > li');
      let list2Len = list2.length;
      alert( index, list2Len);
    });
  });
}

init();
