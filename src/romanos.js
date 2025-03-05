function decimalARomano(numero) {
    const valores = [
        { num: 500, rom: "D" },
        { num: 100, rom: "C" },
        { num: 50, rom: "L" },
        { num: 10, rom: "X" },
        { num: 9, rom: "IX" },
        { num: 5, rom: "V" },
        { num: 4, rom: "IV" },
        { num: 1, rom: "I" }
    ];

    let resultado = "";
    for (let i = 0; i < valores.length; i++) {
        while (numero >= valores[i].num) {
            resultado += valores[i].rom;
            numero -= valores[i].num;
        }
    }
    return resultado;
}

export default decimalARomano;
