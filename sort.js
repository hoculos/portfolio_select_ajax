function sort(value) {
	var request = new XMLHttpRequest();
	var url = "/request.php";
	if (value == 1) {
		vars = "one=" + document.getElementById("sub1").value;
	} else if (value == 2) {
		vars = "two=" + document.getElementById("sub2").value;
	} else if (value == 3) {
		vars = "three=" + document.getElementById("sub3").value;
	} else if (value == 4) {
		vars = "four=" + document.getElementById("sub4").value;
	}

	request.open("POST", url, true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.send(vars);
	
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			var return_data = request.responseText;
			document.getElementById("request").innerHTML = return_data;
			console.log(return_data);
		}
	}
	
	document.getElementById("request").innerHTML = "processing...";
}