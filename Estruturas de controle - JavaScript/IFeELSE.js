const imprimirresultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirresultado(10)
imprimirresultado(4)
imprimirresultado('Epa!') // cuidado!!!