"use strict"


const farmacoElement = document.querySelector('#farmaco')
const presentacionElement = document.querySelector('#presentacion')
const pesoElement = document.querySelector('#kilos')
const calcButton = document.querySelector('#calcularBtn')


const answer = document.querySelector('.answer')
const respuesta = document.querySelector('#respuesta')
const dataFarmaco = document.querySelector('#dataFarmaco')
const dataUnits = document.querySelector('#dataUnits')
const dosisInput = document.querySelector('#dosisInput')

farmacoElement.addEventListener('change',getPresentacion, false)
calcButton.addEventListener('click', updatePrescriptionDOM, false)



function updatePrescriptionDOM(event){
    console.log('calcReceta triggered')
    const farmaco = farmacoElement.value.toLowerCase()
    
    answer.classList.remove('hide');
    
    if(!farmacos[farmaco]){
        respuesta.innerText = 'Debes escoger un Farmaco'
        return
    }

    const dosisDefault = farmacos[farmaco].dosis.ammount
    const dosisUnidades = farmacos[farmaco].dosis.units
    const presentacion = farmacos[farmaco]['presentacion'].filter( v => v.name === presentacionElement.value)[0]

    if(!presentacion){
        respuesta.innerText = 'Debes escoger una Presentacion'
        return
    }

    if(!pesoElement.value){ 
        respuesta.innerText = 'Debes ingresar un Peso'
        return
    }
    if(!dosisInput.value){
        dosisInput.value = dosisDefault
    }

    const pesoKg = pesoElement.value
    let dosis = {
        ammount: dosisInput.value,
        units: dosisUnidades
    }
    const receta = calcReceta(farmaco, pesoKg, presentacion, dosis)
    respuesta.innerText = `${receta[0]} ~ ${Math.ceil(receta[0])} ${receta[1]}`
    dataUnits.innerHTML = "&nbsp;" +`${dosis.units.replace(/\s/g,'')}`;

    document.querySelector('.data.hide').classList.remove('hide')
    
}

