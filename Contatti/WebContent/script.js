var i=0;
var contatti;
function Contatto(nome, cognome, telefono, email) {
	this.nome = nome;
	this.cognome = cognome;
	this.telefono = telefono;
	this.email = email;
}

function addContact() {
	 contatti[i]= new Contatto(document.getElementById('nome').value, document
			.getElementById('cognome').value, document
			.getElementById('numero').value,
			document.getElementById('mail').value);
	 i++;
}

document.getElementById('add').addEventListener("click", addContact);
