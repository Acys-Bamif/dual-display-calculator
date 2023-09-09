var night = true;

function mode() {
	if (night == true) {
		night = false;
		body.style.backgroundColor = "#333";
		inputs.style.backgroundColor = "#ccc";
	} else {
		night = true;
		body.style.backgroundColor = "#ccc";
		inputs.style.backgroundColor = "#fff";
	}
}

function del() {
	var a = document.getElementById("input").value;
	document.getElementById("input").value = a.slice(0, -1);
}