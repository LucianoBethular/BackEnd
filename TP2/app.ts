

async function operacione(operacion:string, a:number,b:number) {
    switch(operacion){
        case "sumar":
        let {Suma} = await import ("./operaciones");
        let sumar = new Suma(a,b);
        return sumar.ver();
        break;

        case "restar":
            let {Resta} = await import ("./operaciones");
            let restar = new Resta(a,b);
            return restar.ver();
        break;
    }
    
};

operacione("sumar", 1,2).then((e)=>{console.log(e)}).catch(err => console.log(err))
operacione("restar", 345,3).then((e)=>{console.log(e)}).catch(err => console.log(err))