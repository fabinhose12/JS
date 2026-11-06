    const numeros = [10, 5, 8, 20, 3, 15, 2];

    function somarPares(lista) {
    let soma = 0;

    for (let i = 0; i < lista.length; i++) {
        let numeroAtual = lista[i];


        if (numeroAtual % 2 === 0) {
        soma += numeroAtual; 
        }
    }

    return soma;
    }

    const resultado = somarPares(numeros);
    console.log("A soma dos números pares é:", resultado);