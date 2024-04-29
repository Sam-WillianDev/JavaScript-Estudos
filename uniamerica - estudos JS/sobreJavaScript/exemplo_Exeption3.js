function checkPositivo(numeros){
    if(!Array.isArray(numeros)){
        throw new Error("O argumento deve ser de um array")
    }

    const allPositive = numeros.every((num) => num > 0);
    if(!allPositive){
        throw new Error ("O array deve conter números positivos")
    }

    return true
}

try {
    const numbers = [1,2,3,4,5,6]

    const isPositivo = checkPositivo(numbers)

    console.log(isPositivo)

} catch (error) {
    console.log("Ocorreu um erro", error.message)
    
}