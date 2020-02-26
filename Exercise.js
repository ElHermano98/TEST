function insertText(){
	document.getElementById("newContent").innerHTML = "Some new text: <br> HELLO <br>";
}


function calculate(){
	var t = widthBox.value;
	//read from the textBoxs
	var w = document.getElementById("widthBox").value;
	var l = document.getElementById("lengthBox").value;
	var h = document.getElementById("heightBox").value;
	//konverterer til float
	w=parseFloat(w);
	l=parseFloat(l);
	h=parseFloat(h);
	var result = w*l*h;
	//vis resultat i div
	document.getElementById("result").innerHTML = result;
}
