const calculadora = document.getElementById('calculadora');
const resultado = document.getElementById('resultado');

let numero1 = '';
let numero2 = '';
let operacion = '';
let point = false;

calculadora.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        const valor = e.target.innerText;
        if (!isNaN(valor)) {
            if (!point) {
                numero1 += valor;
                resultado.value = numero1;
            } else {
                numero2 += valor;
                resultado.value = numero1 + ' ' + operacion + ' ' + numero2;
            }
        } 
        else if (valor === '+' || valor === '-' || valor === 'x' || valor === '/') {
            if (numero1 !== '') {
                operacion = valor;
                point = true;
                resultado.value = numero1 + ' ' + operacion;
            }
        } 
        else if (valor === '=') {
            if (numero1 !== '' && numero2 !== '' && operacion !== '') {
                let n1 = parseFloat(numero1);
                let n2 = parseFloat(numero2);
                let res;
                switch (operacion) {
                    case '+': res = n1 + n2; break;
                    case '-': res = n1 - n2; break;
                    case 'x': res = n1 * n2; break;
                    case '/': res = n2 === 0 ? 'Error' : n1 / n2; break;
                }
                resultado.value = res;
                numero1 = res;
                numero2 = '';
                operacion = '';
                point = false;
            }
        }
        else if (valor === 'C') {
            numero1 = '';
            numero2 = '';
            operacion = '';
            point = false;
            resultado.value = '';
        }
    }
});