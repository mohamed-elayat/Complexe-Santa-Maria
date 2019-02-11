

function validateForm() {
		
	var arrival = document.getElementById("maDate").value;
	var today = new Date();

	var dd = today.getDate();
	var mm = today.getMonth() + 1;
	var yyyy = today.getFullYear();
			
	if(  dd < 10  ){			
		dd = "0"+dd;
	}
	else if(  mm < 10  ){
		mm = "0"+mm;
	}
			
	var today2 = yyyy + "-" + mm + "-" + dd;
			
	if(  arrival == ""  ){
		return true;
	}
			
			
	else if(  arrival < today2  ){		
		alert("SVP rentrez la bonne date.");
		return false
	}
			
}

//Mohamed Elayat et Guilhem Robert-Apesteguy