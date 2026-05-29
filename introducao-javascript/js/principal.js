var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";



var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var pesoEhValido = true
    var alturaValida = true

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    if (peso <= 0 || peso > 595){
        console.log("Peso invalido!");
        tdPeso.textContent = "Peso invalido";
        pesoEhValido = false;
    }

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    if (altura <= 0 || peso > 2.72){
        console.log("Altura invalida!");
        tdAltura.textContent = "Altura invalida";
        alturaValida = false;
    }

    var tdImc = paciente.querySelector(".info-imc");
    if (pesoEhValido && alturaValida){
        var imc = peso / Math.pow(altura, 2);
        tdImc.textContent = imc.toFixed(2);
    } else{
        tdImc.textContent = " "
    }
    var imc = peso / Math.pow(altura, 2);

    tdImc.textContent = imc.toFixed(2);
}
