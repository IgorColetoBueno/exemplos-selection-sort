function sort(numeros) 
{ 
    var tamanhoDoArray = numeros.length; 

    // Percorre o array do primeiro ao penúltimo elemento
    for (var i = 0; i < tamanhoDoArray-1; i++) 
    { 
        // Encontra o valor mínimo percorrendo o array novamente, do índice de fora ao último elemento
        var menorIndice = i; 
        for (var j = i+1; j < tamanhoDoArray; j++) 
            if (numeros[j] < numeros[menorIndice]) 
                menorIndice = j; 

        /* Troca do menor elemento com o elemento da posição i */

        // Variável temporária para receber o valor do menor índice
        var aux = numeros[menorIndice]; 

        // Finalmente inverte os elementos para efetuar a ordenação
        numeros[menorIndice] = numeros[i]; 
        numeros[i] = aux; 

        // Imprime a lista a cada iteração
        console.log(`\nIteração ${i+1} \n`)
        console.log(numeros)
    } 

    //Imprime a lista final
    console.log("\nNova lista:")
    console.log(numeros)

    return numeros
} 

sort([12,22,4,12,21,566,15])