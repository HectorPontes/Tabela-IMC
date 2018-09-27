var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");
//console.log("tamanho do meu array "+  pacientes.length);

for (var i = 0; i < pacientes.length; i++)
{
     var paciente = pacientes[i];                                                           //console.log(pacientes[i]);

     var tdpeso = paciente.querySelector(".info-peso");
     var peso = tdpeso.textContent;

     var tdaltura = paciente.querySelector(".info-altura");
     var altura = tdaltura.textContent;

var tdimc = paciente.querySelector(".info-imc"); //colocando o conteudo na página do imc
//tdimc.textContent = imc; 
//console.log(paciente); // tem que aparece meu tr(informação linha).
//console.log(tdpeso);   // tem que aparecer meu td(informação coluna).
//console.log(peso);     //obter conteudo do mesmo no caso 100.
//console.log(altura);   // obter conteudo do mesmo 


var  pesovalido = validaPeso(peso); //aqui ele vai validar se é true ou false;
var  alturavalida= validaAltura(altura); //aqui ele vai validar se é true ou false;


if(!pesovalido)
{
	//console.log("Peso Inválido!");
	pesovalido = false;
	tdimc.textContent= " Peso Inválido!";
	//paciente.style.backgroundColor = "lightcoral";  não é uma boa pratica fazer esses tipo de estilos no JS e sim no CSS.
	paciente.classList.add("paciente-invalido");
}

if(!alturavalida)
{
	//console.log("Altura Inválida!");
	alturavalida = false;
	tdimc.textContent = "Altura Inválida!";
	paciente.classList.add("paciente-invalido");
}

if(pesovalido == true && alturavalida == true)
{
	var imc = calculaImc(peso,altura);
	tdimc.textContent = imc;  
	//paciente.classList.add("paciente-valido"); //toFixed(2);  passei esse codigo pra função calculaImc.
	
	//paciente.style.backgroundColor= "lightgreen";  não é uma boa pratica fazer esses tipo de estilos no JS e sim no CSS.
}
}

function validaPeso(peso){
	if(peso >=0 && peso <1000){
		return true;
	}
	else
		{ return false;
		}
	}

	function validaAltura(altura){
		if(altura>=0 && altura <= 3.0){
			return true;
		}
		else{
			return false;
		}
	}

	function calculaImc(peso,altura)
	{
		var imc=0;
		imc = peso/(altura*altura);
		return imc.toFixed(2);
	}


/*codigo pra ouvir o evento
titulo.addEventListener("click", function(){
	console.log("Chamando função anonima!");
});
/*function mostraMensagem()
{
	   console.log("Olá eu fui clicado!");
	}*/

