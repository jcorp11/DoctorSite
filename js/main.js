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
    respuesta.innerText = `${receta[0]} ~ ${Math.ceil(receta[0])} ${receta[1]}`
    dataFarmaco.innerText =  `Farmaco: ${farmaco.charAt(0).toUpperCase() + farmaco.slice(1)}`
    dataDosis.innerText = `Dosis: ${dosis.ammount} ${dosis.units.replace(/\s/g,'')}`
}

