function validarArray(arr, num){
    try {
        if (!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if (typeof arr !== 'object' ) throw new TypeError("O array deve ser do tipo objeto!");

        if (typeof num !== 'number') throw new TypeError("O número deve ser do tipo number");
        
        if (arr.lenght !== num) throw new RangeError("Tamanho inválido!");

        return arr;

               
    } catch (error) {
        if (error instanceof ReferenceError){
            console.log("Este é um ReferenceError!");
            console.log(error.message);
        } else if( error instanceof TypeError){
            console.log("Este é um TypeError!");
            console.log(error.message);
        } else if (error instanceof RangeError){
            console.log("Este é um RangeError!");
            console.log(error.message);
        } else {
            console.log("Este é um erro inesperado!");
            console.log(error.message);
        }
        
    }
}

console.log(validarArray([1,2,3,4,5], 5));