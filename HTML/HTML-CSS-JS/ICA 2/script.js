function submitBooking()
{
	
	let name= document.getElementById("name").value;
	let email= document.getElementById("email").value;
	let phone= document.getElementById("phone").value;
	let room= document.getElementById("room").value;
	
let payment= document.querySelector('input[name="payment"]:checked');

let paymentMethod=payment ? payment.value : "Not Selected";
		//condition ? value_if_true : value_if_false;
	
	
	document.getElementById("result").innerHTML = 
		"<p>Name: "+ name + "</p>"+
		"<p>Email: "+ email + "</p>"+
		"<p>Phone: "+ phone + "</p>"+
		"<p>Room Type: "+ room + "</p>"+
		"<p>Payment Method: "+ paymentMethod + "</p>";
		
	alert("Ordered Successfully!");
	
}

