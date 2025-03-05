import decimalARomano from "./romanos.js";

describe("Conversión de números decimales a romanos", () => {
    it("Convierte 1 a 'I'", () => {
        expect(decimalARomano(1)).toEqual("I");
    });

    it("Convierte 2 a 'II'", () => {
        expect(decimalARomano(2)).toEqual("II");
    });

    it("Convierte 5 a 'V'", () => {
        expect(decimalARomano(5)).toEqual("V");
    });
    
    it("Convierte 7 a 'VII'", () => {
        expect(decimalARomano(7)).toEqual("VII");
    });
    
    
});
