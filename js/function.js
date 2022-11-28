function getPresentacion(event){
    const farmaco = event.target.value.toLowerCase()
    presentacionElement.innerHTML = '<option value="false">presentacion ?</option>'
    const presen = farmacos[farmaco]['presentacion']
    presen.forEach( v =>{
        const opt = document.createElement('option')
        opt.innerText = v.name
        opt.value = v.name
        presentacionElement.appendChild(opt)

    } )
    dosisInput.value = farmacos[farmaco].dosis.ammount
}

function calcReceta(farmaco, pesoKg, presentacion, dosis){
    
    const monto = DecimalPrecision.round( dosis.ammount * pesoKg / presentacion.ammount,2)

    let unidades = {
        'Kg': 1,
        'mg': 0,
        'ml': 0,
    }
    dosis.units.split(' ').forEach(function(v){
        modifyUnits(v, unidades, 1)
    });
    presentacion.units.split(' ').forEach(function(v){
        modifyUnits(v, unidades, -1)
    });
    

    unidades = unitToString(unidades)
    return [monto , unidades]


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

function unitToString(unit){
    return Object.keys(unit).reduce((s,v)=>{
        if(unit[v] < 0) s+='/'
        if(Math.abs(unit[v]) !== 0){
            s+=v
            if(Math.abs(unit[v]) > 1){
                s+='^'+Math.abs(unit[v])
            }
        }

        return s
    },'')
    
}


const DecimalPrecision = (function() {
    if (Math.trunc === undefined) {
        Math.trunc = function(v) {
            return v < 0 ? Math.ceil(v) : Math.floor(v);
        };
    }
    var decimalAdjust = function myself(type, num, decimalPlaces) {
        if (type === 'round' && num < 0)
            return -myself(type, -num, decimalPlaces);
        var shift = function(value, exponent) {
            value = (value + 'e').split('e');
            return +(value[0] + 'e' + (+value[1] + (exponent || 0)));
        };
        var n = shift(num, +decimalPlaces);
        return shift(Math[type](n), -decimalPlaces);
    };
    return {
        // Decimal round (half away from zero)
        round: function(num, decimalPlaces) {
            return decimalAdjust('round', num, decimalPlaces);
        },
        // Decimal ceil
        ceil: function(num, decimalPlaces) {
            return decimalAdjust('ceil', num, decimalPlaces);
        },
        // Decimal floor
        floor: function(num, decimalPlaces) {
            return decimalAdjust('floor', num, decimalPlaces);
        },
        // Decimal trunc
        trunc: function(num, decimalPlaces) {
            return decimalAdjust('trunc', num, decimalPlaces);
        },
        // Format using fixed-point notation
        toFixed: function(num, decimalPlaces) {
            return decimalAdjust('round', num, decimalPlaces).toFixed(decimalPlaces);
        }
    };
})();


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