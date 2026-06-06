const title=document.getElementById("title");
const button=document.getElementById("title");

button.addEventListener("click",function ()){
	
	//change text
	title.textContent = "Button Clicked!";
	
	//change color
	title.style.color = "red";
	
});