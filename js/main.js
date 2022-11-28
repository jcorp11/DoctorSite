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

farmaList()

farmacoElement.addEventListener('change',getPresentacion, false)
calcButton.addEventListener('click', updatePrescriptionDOM, false)







