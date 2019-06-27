var ulmain = document.getElementById("mainlist");
var ulside = document.getElementById("sidelist");
var ulfro = document.getElementById("finallist")
var button = document.getElementById("enter");
var input = document.getElementById("maininput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	var limain = document.createElement("li");
	limain.appendChild(document.createTextNode(input.value));
	limain.classList.add("list-group-item");
	ulmain.appendChild(limain);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);



var button2 = document.getElementById("enter2");
var input2 = document.getElementById("sideinput");
var ul2 = document.getElementById("nextList")

function input2Length() {
	return input2.value.length;
}

function createListElement2() {
	var li2 = document.createElement("li");
	li2.appendChild(document.createTextNode(input2.value));
	ul2.appendChild(li2);
	var limain = document.createElement("li");
	limain.appendChild(document.createTextNode(input2.value));
	limain.classList.add("list-group-item");
	ulside.appendChild(limain);
	input2.value = "";
}

function addListAfterClick2() {
	if (input2Length() > 0) {
		createListElement2();
	}
}

function addListAfterKeypress2(event) {
	if (input2Length() > 0 && event.keyCode === 13) {
		createListElement2();
	}
}

button2.addEventListener("click", addListAfterClick2);
input2.addEventListener("keypress", addListAfterKeypress2);





var button3 = document.getElementById("enter3");
var input3 = document.getElementById("frontinput");
var ul3 = document.getElementById("frontlist")

function input3Length() {
	return input3.value.length;
}

function createListElement3() {
	var li3 = document.createElement("li");
	li3.appendChild(document.createTextNode(input3.value));
	ul3.appendChild(li3);
	var limain = document.createElement("li");
	limain.appendChild(document.createTextNode(input3.value));
	limain.classList.add("list-group-item");
	ulfro.appendChild(limain);
	input3.value = "";
}

function addListAfterClick3() {
	if (input3Length() > 0) {
		createListElement3();
	}
}

function addListAfterKeypress3(event) {
	if (input3Length() > 0 && event.keyCode === 13) {
		createListElement3();
	}
}

button3.addEventListener("click", addListAfterClick3);
input3.addEventListener("keypress", addListAfterKeypress3);




var button1 = document.getElementById("enter1");
var name1 = document.getElementById("name");
var head = document.getElementById("bag");

function addName() {
	var h = document.createElement("h3");
	h.appendChild(document.createTextNode(name1.value));   
	head.appendChild(h);
}
function addClick() {
	addName();
}
function addKeypress(event) {
	if (event.keyCode === 13) {
		addName();
	}
}
button1.addEventListener("click", addClick);
name1.addEventListener("keypress", addKeypress);




var box = document.querySelector(".container");
var col = document.getElementById("color");
col.addEventListener("input", function(){
	box.style.background = "linear-gradient("+col.value+", black)";
})