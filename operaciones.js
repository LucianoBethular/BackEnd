"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resta = exports.Suma = void 0;
class Suma {
    constructor(a, b) {
        this.resultado = 0;
        this.resultado = a + b;
    }
    ver() {
        return this.resultado;
    }
}
exports.Suma = Suma;
class Resta {
    constructor(a, b) {
        this.resultado = 0;
        this.resultado = a - b;
    }
    ver() {
        return this.resultado;
    }
}
exports.Resta = Resta;
