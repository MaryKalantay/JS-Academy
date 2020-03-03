function init() {

	let visual = document.getElementById('visual');
	let visualString = visual.innerHTML.toString();

	let vStr = visualString.match(/\d/g);
	let maxNumber = Math.max(...vStr);
	console.log(maxNumber);
	let str = visualString.split(";").pop();
	let str2 = str.split(/(\d+)/);
	console.log(str);
	console.log(str2);
	console.log(str2[1]);
	let numberRandom = Math.floor(Math.random() * maxNumber) + 1;
	str2[1] =  numberRandom;
	if (numberRandom < 10) {
		str2[1] = "0" + numberRandom;
	} else {
		str2[1] = numberRandom;
	}
	let imgPath = str2[0] + str2[1] + str2[2];
	console.log(imgPath);
	let img =  document.createElement('img');
	let imgAtrr =  img.setAttribute("src", imgPath);
	console.log(visual);
	visual.innerHTML = "";
	visual.appendChild(img);

	visual.innerHTML = html(img);
}

init();