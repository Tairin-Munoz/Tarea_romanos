import decimalARomano from "./romanos.js";

describe("Conversión de números decimales a romanos", () => {
    it("Convierte 1 a 'I'", () => {
        expect(decimalARomano(1)).toEqual("I");
    });

    it("Convierte 2 a 'II'", () => {
        expect(decimalARomano(2)).toEqual("II");
    });
    
});
