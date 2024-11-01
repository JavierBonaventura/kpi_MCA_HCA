// Definición de intervalos como objetos con límites numéricos
const tramoSantaElenaLasEstacas = require("./tramoSantaElenaLasEstacas.js"); // Usar require

const LoFIntervals = [
    { min: -Infinity, max: 0.00001 },
    { min: 0.00001, max: 0.0001 },
    { min: 0.0001, max: 0.001 },
    { min: 0.001, max: 0.01 },
    { min: 0.01, max: 0.1 },
    { min: 0.1, max: 1 },
    { min: 1, max: Infinity }
];

const CoFIntervals = [
    { min: 1500000000, max: Infinity },
    { min: 150000000, max: 1500000000 },
    { min: 150000, max: 150000000 },
    { min: 500000, max: 1500000 },
    { min: 40000, max: 500000 },
    { min: 4000, max: 40000 },
    { min: -Infinity, max: 4000 }
];

// Datos de entrada

// Inicializar la matriz de riesgo
const matriz = {
    riskMatrix: []
};

// Función para obtener el índice del intervalo de LoF
function getLoFIndex(value) {
    for (let i = 0; i < LoFIntervals.length; i++) {
        const interval = LoFIntervals[i];
        if (value > interval.min && value <= interval.max) {
            return i;
        }
    }
    return -1; // No encontrado
}

// Función para obtener el índice del intervalo de CoF
function getCoFIndex(value) {
    for (let i = 0; i < CoFIntervals.length; i++) {
        const interval = CoFIntervals[i];
        if (value > interval.min && value <= interval.max) {
            return i;
        }
    }
    return -1; // No encontrado
}

// Crear la matriz de riesgo
for (let i = 0; i < LoFIntervals.length; i++) {
    for (let j = 0; j < CoFIntervals.length; j++) {
        matriz.riskMatrix.push({
            position: `Position ${i + 1}-${j + 1}`,
            location: `column ${j + 1} x row ${i + 1}`,
            CoF: `${CoFIntervals[j].min} - ${CoFIntervals[j].max}`,
            FoF: `${LoFIntervals[i].min} - ${LoFIntervals[i].max}`,
            items: []
        });
    }
}

// Clasificar los elementos en la matriz
tramoSantaElenaLasEstacas.forEach(item => {
    const loFIndex = getLoFIndex(item.LoFValue);
    const coFIndex = getCoFIndex(item.CoFValue);

    console.log(`Item: ${item.Name}, LoFValue: ${item.LoFValue}, CoFValue: ${item.CoFValue}`);
    console.log(`LoF Index: ${loFIndex}, CoF Index: ${coFIndex}`);

    if (loFIndex !== -1 && coFIndex !== -1) {
        matriz.riskMatrix[loFIndex * CoFIntervals.length + coFIndex].items.push(item);
    }
});

// Resultado
console.log(JSON.stringify(matriz, null, 2));
