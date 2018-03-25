function login() {
	var a = document.getElementById('Uname').value;
var b = document.getElementById('Uemail').value;
var c = document.getElementById('Upass').value;
	if ( a=="admin" && c=="admin" || b=="admin@admin.com" && c=="admin") {
		alert("Good")
	} else {
		alert("Failed")
	}
	console.log(a,b,c);
}