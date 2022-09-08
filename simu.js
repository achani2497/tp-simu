const { randomInt } = require("crypto")

const random_number = function () {
    let numero = randomInt(71)
    while (numero < 20) {
        numero = randomInt(71)
    }
    return numero
}

const non_generated = function (numbers_array) {
    const length = numbers_array.length
    var non_generated_array = []
    for (let i = 0; i < length; i++) {
        if (numbers_array[i] == 0) {
            non_generated_array.push(i + 20)
        }
    }

    return non_generated_array
}

const fdp = function (ejecution_times) {

    var numbers_array = new Array(51).fill(0)
    const length = numbers_array.length

    // Va filleando el array por cada aparicion de un numero, tiene el ofsset corrido 20 posiciones para no tener 20 posiciones al pedo
    for (let i = 0; i < ejecution_times; i++) {
        const number = random_number()
        numbers_array[number - 20] += 1
    }

    // Printeo de resultados
    for (let i = 0; i < length; i++) {
        console.log(`El numero ${i + 20} apareció ${numbers_array[i]} veces`)
    }

    // Numeros que no fueron generados
    console.log(non_generated(numbers_array))

}

// Cambiar a 50, 100 o 1000 segun lo pida la consiga. De base ya está ordenado, aunque no sé si la consigna se referia a ordenar el array segun la cantidad de veces que apareció el numero, no creo que apunte a eso.
fdp(100)

const every_number_repeated = function (numbers_array) {
    const first_value = numbers_array[0]
    return numbers_array.every(repeated_times => repeated_times == first_value)
}

