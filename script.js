function firstChar(text) {
  // your code here
	let x = text;
	x = x.trim()
	if(x.length>0)return x[0];
	return "";
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
