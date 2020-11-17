var textValue;
var input = document.getElementsByClassName("input");
var a = document.getElementById("image");
var filter = input.value.toUpperCase();


for (i = 0; i < a.length; i++) {
	b = a[i].getElementByTagName("a")[0];
	textValue = b.textContent || b.innerText;
	
	if (textValue.toUpperCase().indexOf(filter) > -1) {
		a[i].style.display = "";
		
	}else {
		a[i].style.display = "none";
	}
	
}


























