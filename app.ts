

async function operacion(operacion:string, a:number,b:number) {
    switch(operacion){
        case "sumar":
        let {Suma} = await import ("./operaciones");
        let sumar = new Suma(3,5);
        return sumar.ver();
        break;

        case "restar":
            let {Resta} = await import ("./operaciones");
            let restar = new Resta(10,4);
            return restar.ver();
        break;
    }
    
}


