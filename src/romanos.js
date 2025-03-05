function decimalARomano(numero) {
    if (numero >= 5) return "V" + decimalARomano(numero - 5);
    
    let resultado = "";
    while (numero > 0) {
        resultado += "I";
        numero--;
    }
    return resultado;
}

export default decimalARomano;
