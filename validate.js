function validate(){
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var number = document.getElementById("PhoneNumber").value;
	var email = document.getElementById("Email").value;
	
	
	if (fname == ""){
	errMsg = "First name cannot be empty.";
	alert(errMsg);
	}
	
	if (lname == ""){
	errMsg = "Last name cannot be empty.";
	alert(errMsg);
	}
	
	if (number == ""){
	errMsg = "Telephone Number cannot be empty.";
	alert(errMsg);
	}
	
	if (email == ""){
	errMsg = "Email cannot be empty.";
	alert(errMsg);
	}
		return result;
}

function message(){
	var mask = document.getElementById("mask").innerHTML;
	var jacket = document.getElementById("jacket").innerHTML;
	var bag = document.getElementById("bag").innerHTML;
	
	var price = 1;
	var price1 = 50;
	var price2 = 150;
	
	var quantity = document.getElementById("quantity").value;
	var quantity1 = document.getElementById("quantity1").value;
	var quantity2 = document.getElementById("quantity2").value;
	
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	
	var total = price * quantity + price1 * quantity1 + price2 * quantity2;
	
	if (quantity1 == ""){
		if (quantity2 == ""){
	alert("Dear " + fname +" " + lname +", You have Ordered " + quantity + mask + "at a cost of $" + price + "each and Your total bill is $" + total + "Thank you.");
	}
	}
	if(quantity == ""){
		 if (quantity2 == ""){
			alert("Dear " + fname +" " + lname +", You have Ordered " + quantity1 + jacket + "at a cost of $" + price1 + "each and Your total bill is $" + total + "Thank you.");
		}
	}
	if(quantity == ""){
		 if (quantity1 == ""){
			alert("Dear " + fname +" " + lname +", You have Ordered " + quantity2 + bag + "at a cost of $" + price2 + "each and Your total bill is $" + total + "Thank you.");
		}
	}
	else{
		alert("Dear " + fname +" " + lname +", You have Ordered " + quantity + mask + "at a cost of $" + price + "each and" + quantity1 + jacket + "at a cost of $" + price1 + "each and" + quantity2 + bag + "at a cost of $"+ price2 + "each and Your total bill is $" + total + " Thank you.");
		}
	return result;
}
function changeFontSize(target) {
                if (target == document.getElementById("button1")) {
                    document.getElementById("greet").style.fontSize = document.getElementById("greet").style.fontSize + "5px";
                } else if (target == document.getElementById("button2")) {
                    document.getElementById("greet").style.fontSize = document.getElementById("greet").style.fontSize + "-5px";
                }
            }



