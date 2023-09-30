document.getElementById('formulario').addEventListener('submit', function (event) {
  event.preventDefault();

  const n = parseInt(document.getElementById('n').value);
  const k = parseInt(document.getElementById('k').value);
  const tipo = document.getElementById('tipo').value;

  let resultado;

  switch (tipo) {
    case 'permutacionesSinRepetición':
            resultado = calcularPermutacionesSinRepetición(n, k);
            break;
        case 'permutacionesConRepetición':
            resultado = calcularPermutacionesConRepetición(n, k);
            break;
        case 'combinacionesSinRepetición':
            resultado = calcularCombinacionesSinRepetición(n, k);
            break;
        case 'combinacionesConRepetición':
            resultado = calcularCombinacionesConRepetición(n, k);
            break;
        default:
            resultado = 'Tipo de cálculo no válido';
    }


    const resultadosHTML = `
        
        <p>${resultado}</p>
    `;

    document.getElementById('resultados').innerHTML = resultadosHTML;
});

function calcularPermutacionesSinRepetición(n, k) {
    if (n < k) {
        return 0;
    }
    let resultado = 1;
    for (let i = n; i > n - k; i--) {
        resultado *= i;
    }
    return resultado;
}
function calcularPermutacionesConRepetición(n, k) {
    return Math.pow(n, k);
}
function calcularCombinacionesSinRepetición(n, k) {
    if (n < k) {
        return 0;
    }
    if (k === 0 || k === 1) {
        return 1;
    }
    const numerador = calcularPermutacionesSinRepetición(n, k);
    const denominador = calcularPermutacionesSinRepetición(k, k);

    return numerador / denominador;
}
function calcularCombinacionesConRepetición(n, k) {
    return calcularCombinacionesSinRepetición(n + k - 1, k);
}

