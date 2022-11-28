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


const farmaList = function(){
    const farma = Object.keys(farmacos).sort( (a,b)=> a.localeCompare(b))
    farma.forEach(v=>{
        let str = v[0].toUpperCase() + v.substring(1)
        let item = document.createElement('option')
        item.innerText = str;
        item.value = str;
        farmacoElement.appendChild(item)
    })
    console.log(farma)
};

farmaList()






