function required()
{
	let firstName = document.forms["lotoform"]["firstname"].value;
	if (firstName == ""){
		alert("Veuillez fournir un prénom.");
		return true;
	}

	let lastName = document.forms["lotoform"]["lastname"].value;
	if (lastName == ""){
		alert("Veuillez fournir un nom.");
		return true;
	}

	let email = document.forms["lotoform"]["email"].value;
	if (email == ""){
		alert("Veuillez fournir un email.");
		return true;
	} else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
	} else {
		alert("Votre email n'est pas valide.");
		return true;
	}
    
	let lotonumbers = document.forms["lotoform"]["lotonumbers"].value;
	if (lotonumbers == ""){
		alert("Veuillez fournir une liste de 6 numéros.");
		return true;
	}	else if (lotonumbers == "1, 2, 3, 4, 5, 6"){
	} else {
		alert("Désolé vous avez perdu, les nombres gagnants sont :");
		return true;
	}

	alert("Félicitations vous avez gagné 1 million !!!!!");
}
