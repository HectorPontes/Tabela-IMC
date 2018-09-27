var pacientes = document.querySelectorAll(".paciente");
/*pacientes.forEach(function(paciente){    TESTE INICIAL
	paciente.addEventListener("dblclick", function(){
		console.log("Fui clicado!");
		this.remove();
	});
});*/


var tabela= document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
	event.target.parentNode.classList.add("fadeOut");

	setTimeout(function(){
		event.target.parentNode.remove();
	},500);
	});

	//console.log(event.target);

	 /*var alvoEvento = event.target;         ESSE CODIGO É O MESMO CODIGO RESUMINDO EM CIMA = event.target.parentNode.remove();
	 var paiDoAlvo = alvoEvento.parentNode; //TR = pacientes = remover*
	 paiDoAlvo.remove(); */
	


