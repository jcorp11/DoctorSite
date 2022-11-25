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