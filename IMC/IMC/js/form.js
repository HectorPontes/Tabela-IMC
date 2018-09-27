var addbotao = document.querySelector("#adicionar-paciente");
addbotao.addEventListener("click",function(event){
  event.preventDefault();

  //extraindo informações do paciente do form.
  var form = document.querySelector("#form-add");
  var paciente = obtemPacienteDoFormulario(form);
  //console.log(paciente);

  //cria a tr e a td do paciente que vai ser adicionado.
  var pacienteTr = montaTr(paciente);

  var erros = validaPaciente(paciente);
  console.log(erros);


  if(erros.length > 0){
    exibeMensagensDeErro(erros);

    return;
}

adicionarPacienteNaTabela(paciente);

form.reset();
var mensagemErro = document.querySelector("#mensagens-erro");
mensagemErro.innerHTML = "";

});

function adicionarPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    //adiciona o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");  //adiciona no tbody do arquivo HTML
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li=document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form){

            var paciente = {                             //criando um objeto paciente pra passar as propriedades.
                nome:form.nome.value,
                peso:form.peso.value,
                altura:form.altura.value,
                gordura:form.gordura.value,
                imc: calculaImc(form.peso.value , form.altura.value)
            } //criando um objeto paciente pra passar as propriedades.
            return paciente;
        }

        function montaTr(paciente){
            var pacienteTr= document.createElement("tr");
            pacienteTr.classList.add("paciente");

           /* var nomeTd= document.createElement("td");
            nomeTd.classList.add("info-nome");
            nomeTd.textContent = paciente.nome;  resumi essas três linhas usando a função montaTd*/
            
           /* var nomeTd = montaTd(paciente.nome, "info-nome");
            var pesoTd = montaTd(paciente.peso, "info-peso");
            var alturaTd= montaTd(paciente.altura, "info-altura");
            var gorduraTd = montaTd(paciente.gordura, "info-gordura");
            var imcTd= montaTd(paciente.imc, "info-imc");     esse codigo foi remodelado junto ao appendChild      */ 


    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); //appendChild é um comando que atribui a variavel como se fosse um filho , no caso colando os Td dentro do pacienteTr.
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td= document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0) erros.push("O campo nome não está preenchido!");

    if(!validaPeso(paciente.peso)) erros.push("O peso é inválido!");

    if(!validaAltura(paciente.altura)) erros.push("A altura é inválida!");

    if(paciente.gordura.length == 0) erros.push("O campo gordura não está preenchido!");

    if(paciente.peso.length == 0) erros.push("O campo peso não está preenchido!");

    if(paciente.altura.length == 0) erros.push("O campo altura não está preenchido!");


    return erros;
}
