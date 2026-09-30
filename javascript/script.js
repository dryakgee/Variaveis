    document.getElementById("demo").innerHTML = "God";

    let num1, num2, resultado;

    num1 = 5;
    num2 = 2;
    resultado = num1 * num2;

    document.getElementById("resultado").innerHTML = resultado;

    let a, b;

    a = 3;
    b = (100+50) * a;

    document.getElementById("resultado2").innerHTML = b;

    function pegarValor()
    {
        //Pegando o elemento input pelo id e armazenando em uma variável
        let sabrina = document.getElementById("meuInput");
        //extrai o valor digitado usando o .value
        let ValorDigitado = sabrina.value;
        
        document.getElementById("ola").innerHTML = ValorDigitado;
    }