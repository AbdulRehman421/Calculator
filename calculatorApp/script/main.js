

function button(a) {
	document.getElementById("display").value += a;
}



function buttonclear() {
	document.getElementById('display').value = " ";
}


function calculate() {
	var temp = [];
	var answer;

	if (document.getElementById("display").value.includes("+")) {
		temp = document.getElementById("display").value.split('+');
		return answer = parseFloat(temp[0]) + parseFloat(temp[1]);
	}

	else if (document.getElementById("display").value.includes("-")) {
		temp = document.getElementById("display").value.split('-');
		return answer = parseFloat(temp[0]) - parseFloat(temp[1]);
	}

	else if (document.getElementById("display").value.includes("/")) {
		temp = document.getElementById("display").value.split('/');
		return answer = parseFloat(temp[0]) / parseFloat(temp[1]);
	}

	else {
		temp = document.getElementById("display").value.split('*');
		return answer = parseFloat(temp[0]) * parseFloat(temp[1]);
	}
}

function sol() {
	var a = calculate()
	document.getElementById('display').value = a;
}


