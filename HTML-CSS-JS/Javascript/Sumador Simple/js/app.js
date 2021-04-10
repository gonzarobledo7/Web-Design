console.log('Aplicacion Calculadora')

function sumar (){
    //recuperamos el formulario
    const forma= document.getElementById('forma');

    //recuperam,os elementos de Ope A y Op B utilizando obj forma
    let operandoA = forma ['operandoA'];
    let operandoB = forma ['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);

    if (isNaN(resultado)){
        resultado = 'La operacion no incluye numeros';
    }

    //recuperamos div de resultado
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}