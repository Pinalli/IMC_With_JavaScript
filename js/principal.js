var titulo = document.querySelector(".titulo");	
titulo.textContent = "Aparecida Nutricionista";

var pacient = document.querySelector("#first");
var tdPeso = document.querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdAltura = pacient.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);
var tdImc = pacient.querySelector(".info-imc");

tdImc.textContent = imc;