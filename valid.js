// function validateForm() {
//     var Name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var cnfpassword = document.getElementById("confirm-password").value;
//     var address = document.getElementById("address").value;
//     var country = document.getElementById("country").value;
//     var zipcode = document.getElementById("zipcode").value;

// if (name.trim() ==""){
// alert("Name cannot be blank");
// return false;
// }
// var nameRegex = /^[a-zA-Z\s]+$/;
// if (!nameRegex.test(name)) {
//     alert("Name must contain alphabets only");
//     return false;
// }

// if (email.trim() =="") {
// alert("Email cannot be blank");
// return false;
// }

// if (password.trim() == '') {
// alert("Password cannot be blank");
// return false;
// }

// if (password.length < 7 || password.length > 12) {
// alert("Password must be between 7 to 12 characters in length");
// return false;
// }

// if(country == ""){
// alert("Must select a country");
// return false;
// }

// if (zipcode.trim() =="") {
// alert("Zipcode cannot be blank")
// return false;
// }
// var zipregex = /^[0-9]+$/;
// if (!zipregex.test(zipcode)) {
// alert("Zipcode must contain numbers only");
// return false;
// }

// return true;
// }

function validate(){
    // var userID = document.getElementById("userID").value;
    var password = document.getElementById("password").value;
    var name = document.getElementById("name").value;
	var country = document.getElementById("country").value;
	var zipcode = document.getElementById("zipcode").value;
	var email = document.getElementById("email").value;
	/*var sex = document.querySelector('input[name="sex"]:checked').value;*/

    // if (userID.trim() == '') {
    //     alert("User ID cannot be blank");
    //     return false;
    // }
    // if (userID.length < 5 || userID.length > 12) {
    //     alert("User ID must be between 5 to 12 characters in length");
    //     return false;
    // }
    
    if (name.trim() ==""){
        alert("Name cannot be blank");
        return false;
    }
    var nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
        alert("Name must contain alphabets only");
        return false;
    }
    
    if (password.trim() == '') {
        alert("Password cannot be blank");
        return false;
    }
    if (password.length < 7 || password.length > 12) {
        alert("Password must be between 7 to 12 characters in length");
        return false;
    }

    if(country == ""){
        alert("Must select a country");
        return false;
    }

    if (zipcode.trim() =="") {
        alert("Zipcode cannot be blank")
        return false;
    }
    var zipregex = /^[0-9]+$/;
    if (!zipregex.test(zipcode)) {
        alert("Zipcode must contain numbers only");
        return false;
    }

    if (email.trim() =="") {
        alert("Email cannot be blank");
        return false;
    }
    var emailRegex = /^\S+@\S+\.\S+$/;
	if (!emailRegex.test(email)) {
		alert("Please enter a valid email address");
		return false;
	}
            
    return true;
    
}