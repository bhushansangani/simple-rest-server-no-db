// function convertTemp(degree){
// 	if (degree == "C") {

// 		var F = document.getElementById("c").value 9 / 5 + 32;
// 		document.getElementById("f").value = Math.round(F);
// 	} else {

// 	   var C = (document.getElementById("f").value -32) * 5 / 9;
// 	    document.getElementById("c").value = Math.round(C);
// 	}
// }

alert("welcome to my blog");
	function convert(){

		if(!isNaN(document.getElementById("fern").value)){
			var cel = (document.getElementById("fern").value-32) * 5 / 9;
			document.getElementById("cel").value = cel;

		}
		if(isNaN(document.getElementById("fern").value)){
			document.getElementById("fern").className = "error";
			alert("please enter the numeric value");
		}
	}
		function heaven(){
			if (document.getElementById("press").value) {
			document.getElementById("hide").style.visibility = "hidden";
		}
	}

		function reverse(){
			if (document.getElementById("pressA").value) {
			document.getElementById("hide").style.visibility = "visible";
		}
	}
	 	function myOver(){
	 		if (document.getElementById("pressB").value) {
	 			document.getElementById("hide").style.visibility = "visible";

	 		};
	 	}

	 	function myOut(){
	 		if (document.getElementById("pressC").value) {
	 			document.getElementById("hide").style.visibility = "hidden";
	 		}
	 	}

	// function hidden(id){
	// 	var element = document.getElementById(id);
	// 	if (element.style.display == "none") {
	// 		element.style.display = "block";
	// 	};
	// }
// 	function hidden(){
// 		document.getElementById("hide").style.visibility = "hidden";
// }	