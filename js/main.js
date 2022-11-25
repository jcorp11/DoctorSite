"use strict"
// import {farmacos} from './data.js'
console.log(farmacos)
const farmacoElement = document.querySelector('#farmaco')
const presentacionElement = document.querySelector('#presentacion')
const pesoElement = document.querySelector('#kilos')
const calcButton = document.querySelector('#calcularBtn')
const respuesta = document.querySelector('#respuesta')

const dataFarmaco = document.querySelector('#dataFarmaco')
const dataDosis = document.querySelector('#dataDosis')

farmacoElement.addEventListener('change',getPresentacion, false)
calcButton.addEventListener('click', updatePrescriptionDOM, false)



function updatePrescriptionDOM(event){

    console.log('calcReceta triggered')
    if(!pesoElement.value){ 
        respuesta.innerText = 'Debes ingresar un Peso'
        return
    }

    const farmaco = farmacoElement.value.toLowerCase()
    const pesoKg = pesoElement.value
    const dosis = farmacos[farmaco].dosis
    console.log(farmacos[farmaco])
    const presentacion = farmacos[farmaco]['presentacion'].filter( v => v.name === presentacionElement.value)[0]

    const receta = calcReceta(farmaco, pesoKg, presentacion, dosis)

}

function calcReceta(farmaco, pesoKg, presentacion, dosis){
    
    const monto = dosis.ammount * pesoKg / presentacion.ammount
    
    console.log(presentacion)

    const unit = {
        'Kg': 1,
        'mg': 0,
        'ml': 0,
    }
    dosis.units.split(' ').forEach(function(v){
        modifyUnits(v, unit, 1)
    });
    presentacion.units.split(' ').forEach(function(v){
        modifyUnits(v, unit, -1)
    });

    console.log(unit)
}
function modifyUnits(v, unit, divide){
    let modifier = divide;
    if(v[0]==='/'){
        modifier *= -1;
        v = v.slice(1);
    }
    if(unit.hasOwnProperty(v)) { unit[v]+= modifier }
    else unit[v] = modifier
}