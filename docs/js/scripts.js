/*!
* Start Bootstrap - Bare v5.0.9 (https://startbootstrap.com/template/bare)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
//autocheck function
function autobox(name) {
sessionStorage.setItem("checkBox", name)
}

function ischecked() {
	if (sessionStorage.getItem("checkBox") === "carter") {
		const checkbox = document.getElementById("carter");
		checkbox.checked = true;
	}
	if (sessionStorage.getItem("checkBox") === "rebecca") {
		const checkbox = document.getElementById("rebecca");
		checkbox.checked = true;
	}
	if (sessionStorage.getItem("checkBox") === "george") {
		const checkbox = document.getElementById("george");
		checkbox.checked = true;
	}
	if (sessionStorage.getItem("checkBox") === "cass") {
		const checkbox = document.getElementById("cass");
		checkbox.checked = true;
	}
	sessionStorage.clear();
}
	
window.addEventListener("DOMContentLoaded", ischecked);