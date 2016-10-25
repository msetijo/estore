/*function validateForm(){
	
	var firstName = document.getElementById("firstname");
	var lastName = document.getElementById("lastname");
	var pass     = document.getElementById("password");
	var pass2    = document.getElementById("password2");
	var errorStr = "";
	var phonenumber   = document.getElementById("phonenumber").value;
	var emailadd    = document.getElementById("emailaddress").value;
	
	if(firstName.value == "") errorStr += "Enter a first name<br />";
	else if(firstName.value.match(fname) == null)
	{
		errorStr += "Incorrect First Name<br />";
	}
	
	if(lastName.value=="") errorStr += "Enter a last name<br />";
	else if(lastName.value.match(lname) == null)
	{
		errorStr += "Incorrect Last Name<br />";
	}
	
	if(pass.value == "" || pass2.value == "") errorStr += "Enter a password<br />";
	else if(pass.value != pass2.value) errorStr += "Passwords must match<br />";
	
	
	var reg_phonenumber = /^\d{3}\-?\d{3}\-?\d{4}$/;
	var email = /^\w+@[A -z0-9]+\.com$/i;
	var fname = /[A-Za-z][A-Za-z]+/;
	var lname = /[A-Za-z][A-Za-z]+/
	
	if(emailadd.value == "")
		errorStr += "Enter email address <br/>";
		
	if(phonenumber.match(reg_phonenumber) == null)
	{
		errorStr += "Incorrect Phone Number format<br />";
	}

	if(emailadd.match(email) == null)
	{
		errorStr += "Incorrect email format<br />";
	}
	
	
	if(errorStr == ""){
		// ALL IS GOOD
		return true;
	}else{
		// VALIDATION ISSUE
		var errorDiv = document.getElementById("error");
		errorDiv.innerHTML = errorStr;
		return false;
	}	
	
		
}*/

function validate(){
	
	var pass     = document.getElementById("password").value;
	var errorStr = "";
	var emailadd = document.getElementById("emailaddress").value;
	
		if(emailadd == "") errorStr += "Please enter your email address <br/>";
	if(pass == "" ) errorStr += "Please enter your password<br />";
		
	if(errorStr == ""){
		// ALL IS GOOD
		return true;
	}else{
		// VALIDATION ISSUE
		var errorDiv = document.getElementById("error_msg");
		errorDiv.innerHTML = errorStr;
		return false;
	}	
	
}
