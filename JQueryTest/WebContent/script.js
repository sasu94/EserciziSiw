/**
 * 
 */
$(document).ready(function() {
	$('#add').click(addContact);
	$('#change').click(function() {
		$('body').css({
			'background-color' : 'red'
		});
	})
});

var i = 0;
var contatti = [];
function Contatto(nome, cognome, telefono, email) {
	this.nome = nome;
	this.cognome = cognome;
	this.telefono = telefono;
	this.email = email;
}

function addContact() {
	var cont = new Contatto($('#nome').val(), $('#cognome').val(), $('#numero')
			.val(), $('#mail').val());
	contatti.push = cont;
	var tr = $('<tr></tr>');
	tr.append($('<td></td>').text(cont.nome));
	tr.append($('<td></td>').text(cont.cognome));
	tr.append($('<td></td>').text(cont.telefono));
	tr.append($('<td></td>').text(cont.email));
	var modifica = $('<button>modifica</button>');
	modifica.click(edit);

	var elimina = $('<button>elimina</button>');
	elimina.click(rimuovi);
	tr.append($('<td></td>').append(modifica));
	tr.append($('<td></td>').append(elimina));
	$('thead').append(tr);

}

function edit() {
	$(this).parent().parent().children().each(function() {
		if ($(this).text() == "modifica") {
			var ok = $('<button>ok</button>');
			ok.click(fatto);
			$(this).children().replaceWith(ok);
		} else if ($(this).text() == "elimina")
			$(this).children().remove();
		else {
			elem = $(this)
			var t = elem.text();
			elem.text("");
			elem.append($("<input type=\"text\">").val(t));
		}
	});
}

function fatto(){
	var td=$(this).parent();
	td.parent().children("td").each(function(){
		var f=$(this).children();
		var t=f.val();
		f.remove();
		$(this).text(t);
		console.log(t);
	});
	$(this).remove();
	var modifica = $('<button>modifica</button>');
	modifica.click(edit);
	td.append(modifica);
	var elimina = $('<button>elimina</button>');
	elimina.click(rimuovi);
	td.next().append(elimina);
	
}


function rimuovi() {
	$(this).parent().parent().remove();
}
