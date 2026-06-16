//select elements

const title=document.getElementById("title");
const button=document.getElementById("changeBtn");

//Add click event
button.addEventListener("click",function()){
	
	//change Text
	title.textContent="Button Clicked";
	
	//change colorDept
	title.style.color="red";
	
	
	
	
});