function getPresentacion(event){
    const farmaco = event.target.value.toLowerCase()
    // console.log(farmaco) 
    presentacionElement.innerHTML = '<option value="false">presentacion ?</option>'
    const presen = farmacos[farmaco]['presentacion']
    presen.forEach( v =>{
        const opt = document.createElement('option')
        opt.innerText = v.name
        opt.value = v.name
        presentacionElement.appendChild(opt)

    } )
}

function calcReceta(farmaco, pesoKg, presentacion, dosis){
    
    const monto = dosis.ammount * pesoKg / presentacion.ammount
    
    console.log(presentacion)

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