function decimalARomano(numero) {
    let resultado = "";
    while (numero > 0) {
        resultado += "I";
        numero--;
    }
    return resultado;
}

export default decimalARomano;
