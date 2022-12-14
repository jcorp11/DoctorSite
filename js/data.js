
const farmacos = {
    ibuprofeno: {
        presentacion: [
            {name: 'Comprimidos: 200mg', ammount: 200, units: 'mg' },
            {name: 'Comprimidos: 400mg', ammount: 400, units: 'mg' },
            {name: 'Suspension Oral: 100mg/5ml', ammount: 100/5, units: 'mg /ml' },
            {name: 'Suspension Oral: 200mg/5ml', ammount: 200/5, units: 'mg /ml' },
        ],
        dosis: {ammount: 10, units: 'mg /Kg /dosis'} 
    },
    paracetamol: {
        presentacion: [
            {name: 'Gotas: 100mg/ml (3xKg)', ammount: 100, units: 'mg /ml' },
            {name: 'Comprimidos Masticables: 80mg', ammount: 80, units: 'mg' },
            {name: 'Comprimidos Masticables: 160mg', ammount: 160, units: 'mg' },
            {name: 'Suspension Oral: 80mg/5ml', ammount: 80/5, units: 'mg /ml' },
            {name: 'Suspension Oral: 120mg/5ml', ammount: 120/5, units: 'mg /ml' },
            {name: 'Suspension Oral: 160mg/5ml', ammount: 160/5, units: 'mg /ml' },
            {name: 'Supositorio: 125mg', ammount: 125, units: 'mg' },
        ],
        dosis: {ammount: 15, units: 'mg /Kg /dosis'} 
    },
    diclofenaco: {
        presentacion: [
            {name: 'Supositorio: 12.5mg', ammount: 12.5, units: 'mg' },
            {name: 'Supositorio: 50mg', ammount: 50, units: 'mg' },
            {name: 'Gotas: 15 mg/ml (1xKg)', ammount: 15, units: 'mg /ml' },
        ],
        dosis: {ammount: 10, units: 'mg /Kg /dosis'} 
    },
    amoxicilina: {
        presentacion: [
            {name: 'Capsulas: 500mg', ammount: 500, units: 'mg' },
            {name: 'Comprimidos: 750mg', ammount: 750, units: 'mg' },
            {name: 'Suspension oral: 125 mg/5ml', ammount: 125/5, units: 'mg /ml' },
            {name: 'Suspension oral: 250 mg/5ml', ammount: 250/5, units: 'mg /ml' },
            {name: 'Suspension oral: 500 mg/5ml', ammount: 500/5, units: 'mg /ml' },

        ],
        dosis: {ammount: 40, units: 'mg /Kg /dosis'} 
    },
    nitrofurantoina: {
        presentacion: [
            {name: 'Comprimidos: 100mg', ammount: 100, units: 'mg' },
            {name: 'Suspension Oral: 25mg/5ml', ammount: 25/5, units: 'mg /ml' },
            
        ],
        dosis: {ammount: 6, units: 'mg /Kg /dia'} 
    },
    azitromicina: {
        presentacion: [
            {name: 'Comprimidos: 500mg', ammount: 500, units: 'mg' },
            {name: 'Suspension Oral: 200mg/5ml', ammount: 200/5, units: 'mg /ml' },
        ],
        dosis: {ammount: 10, units: 'mg /Kg /dia'} 
    },
    furosemida: {
        presentacion: [
            {name: 'Comprimidos: 40mg', ammount: 40, units: 'mg' },
            {name: 'Inyectable: 20mg/2ml', ammount: 20/2, units: 'mg' },
        ],
        dosis: {ammount: 1.5, units: 'mg /Kg /dosis'} 
    },
    nifedipino: {
        presentacion: [
            {name: 'Comprimidos: 20mg', ammount: 20, units: 'mg' },
        ],
        dosis: {ammount: 0.35, units: 'mg /Kg /dosis'} 
    },
    eritromicina: {
        presentacion: [
            {name: 'Comprimidos: 200mg', ammount: 200, units: 'mg' },
            {name: 'Comprimidos: 500mg', ammount: 500, units: 'mg' },
            {name: 'Suspension Oral: 200mg/5ml', ammount: 200/5, units: 'mg /ml' },
        ],
        dosis: {ammount: 40, units: 'mg /Kg /dosis'} 
    },
    claritromicina: {
        presentacion: [
            {name: 'Comprimidos: 500mg', ammount: 500, units: 'mg' },
            {name: 'Suspension Oral: 125mg/5ml', ammount: 125/5, units: 'mg /ml' },
            {name: 'Suspension Oral: 250mg/5ml', ammount: 250/5, units: 'mg /ml' },
        ],
        dosis: {ammount: 15, units: 'mg /Kg /dia'} 
    },
    cotrimoxazol: {
        presentacion: [
            {name: 'Comprimidos: 400mg', ammount: 400, units: 'mg' },
            {name: 'Comprimidos: 80mg', ammount: 80, units: 'mg' },
        ],
        dosis: {ammount: 40, units: 'mg /Kg /dia'} 
    },
    dexametasona: {
        presentacion: [
            {name: 'Inyectable: 4mg/ml', ammount: 4, units: 'mg /ml' },
        ],
        dosis: {ammount: 0.3, units: 'mg /Kg /dosis'} 
    },
    betametasona: {
        presentacion: [
            {name: 'Comprimidos: 2mg', ammount: 2, units: 'mg' },
            {name: 'Inyectable: 4mg/ml', ammount: 4, units: 'mg /ml' },
        ],
        dosis: {ammount: 0.4, units: 'mg /Kg /dosis'} 
    },
    prednisona: {
        presentacion: [
            {name: 'Suspension Oral: 20mg/5ml', ammount: 20/5, units: 'mg /ml' },
        ],
        dosis: {ammount: 1.5, units: 'mg /Kg /dosis'} 
    },
    hidrocortisona: {
        presentacion: [
            {name: 'Comprimidos: 20mg', ammount: 20, units: 'mg' },
        ],
        dosis: {ammount: 10, units: 'mg /Kg /dosis'} 
    },
    cefadroxilo: {
        presentacion: [
            {name: 'Comprimidos: 500mg', ammount: 500, units: 'mg' },
            {name: 'Suspension Oral: 250mg/5ml', ammount: 250/5, units: 'mg /ml' },
        ],
        dosis: {ammount: 30/2, units: 'mg /Kg /dosis /dia'} 
    },
    amikacina: {
        presentacion: [
            {name: 'Inyectable: 500mg/2ml', ammount: 500/2, units: 'mg /ml' },
        ],
        dosis: {ammount: 15, units: 'mg /Kg /dia'} 
    },
    ceftriaxona: {
        presentacion: [
            {name: 'Polvo para inyeccion: 250mg', ammount: 250, units: 'mg' },
            {name: 'Polvo para inyeccion: 1g', ammount: 1000, units: 'mg' },
        ],
        dosis: {ammount: 60/2, units: 'mg /Kg /dosis /dia'} 
    },
    ampicilina: {
        presentacion: [
            {name: 'Comprimidos: 500mg', ammount: 500, units: 'mg' },
            {name: 'Suspension Oral: 250mg/5ml', ammount: 50, units: 'mg /ml' },
        ],
        dosis: {ammount: (50+25)/2, units: 'mg /Kg /dosis'} 
    },
    // domperidona: {
    //     presentacion: [
    //         {name: 'Comprimidos: 10mg', ammount: 10, units: 'mg' },
    //         {name: 'Gotas: 10mg/ml (1xKg)', ammount: 10, units: 'mg /ml' },
    //     ],
    //     dosis: {ammount: '', units: 'mg /Kg /dosis'} 
    // },
    // pargeverina: {
    //     presentacion: [
    //         {name: 'Gotas: 5mg/ml', ammount: 10, units: 'mg /ml' },
    //     ],
    //     dosis: {ammount: '', units: 'mg /Kg /dosis'} 
    // },
    cloxacilina: {
        presentacion: [
            {name: 'Comprimidos: 500mg', ammount: 500, units: 'mg' },
            {name: 'Suspension Oral: 125mg/5ml', ammount: 125/5, units: 'mg /ml' },
            {name: 'Suspension Oral: 250mg/5ml', ammount: 250/5, units: 'mg /ml' },
        ],
        dosis: {ammount: 50, units: 'mg /Kg /dia'} 
    },
    clindamicina: {
        presentacion: [
            {name: 'Suspension Oral: 600mg/4ml', ammount: 600/4, units: 'mg /ml' },
        ],
        dosis: {ammount: (5+7.5)/2, units: 'mg /Kg /dia'} 
    },
    // levocetericina: {
    //     presentacion: [
    //         {name: 'Suspension Oral: 25mg/5ml', ammount: 25/5, units: 'mg /ml' },
    //     ],
    //     dosis: {ammount: '', units: 'mg /Kg /dia'} 
    // },
    clorfenamina: {
        presentacion: [
            {name: 'Suspension Oral: 2mg/5ml', ammount: 2/5, units: 'mg /ml' },
            {name: 'Inyectable: 4mg/ml', ammount: 4, units: 'mg /ml' },
        ],
        dosis: {ammount: 0.1, units: 'mg /Kg /dosis'} 
    },
}

