//your JS code here. If required.
var para = document.querySelector("#counter");
var btn = document.querySelector("#incrementBtn");

let counter = 0

btn.addEventListener("click",function() {
	alert(counter);
	counter += 1
	para.innerHTML = counter;
})
