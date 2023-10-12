window.onload = function() {
    document.getElementById('rows1').addEventListener('change', function() {
        createMatrixInputs('matrix1', this.value, document.getElementById('columns1').value);
    });

    document.getElementById('columns1').addEventListener('change', function() {
        createMatrixInputs('matrix1', document.getElementById('rows1').value, this.value);
    });

    document.getElementById('rows2').addEventListener('change', function() {
        createMatrixInputs('matrix2', this.value, document.getElementById('columns2').value);
    });

    document.getElementById('columns2').addEventListener('change', function() {
        createMatrixInputs('matrix2', document.getElementById('rows2').value, this.value);
    });

    document.getElementById('randomize1').addEventListener('click', function() {
        randomizeMatrix('matrix1');
    });

    document.getElementById('randomize2').addEventListener('click', function() {
        randomizeMatrix('matrix2');
    });
};

document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var matrix1 = readMatrix('matrix1');
    var matrix2 = readMatrix('matrix2');
    var operation = document.getElementById('operation').value;

    displayMatrix(matrix1, 'matrixDisplay1');
    displayMatrix(matrix2, 'matrixDisplay2');

    var result;
    switch (operation) {
        case 'add':
            result = addMatrices(matrix1, matrix2);
            break;
        case 'subtract':
            result = subtractMatrices(matrix1, matrix2);
            break;
        case 'multiply':
            result = multiplyMatrices(matrix1, matrix2);
            break;
        default:
            alert('Invalid operation');
            return;
    }

    displayMatrix(result, 'matrixDisplayResult');
});

function createMatrixInputs(matrixId, rows, columns) {
    var matrixDiv = document.getElementById(matrixId);
    matrixDiv.innerHTML = ''; // Clear the previous inputs

    for (var i = 0; i < rows; i++) {
        var row = document.createElement('div');
        for (var j = 0; j < columns; j++) {
            var input = document.createElement('input');
            input.type = 'number';
            input.id = matrixId + '-' + i + '-' + j;
            row.appendChild(input);
        }
        matrixDiv.appendChild(row);
    }
}

function readMatrix(matrixId) {
    var matrix = [];
    var inputs = document.getElementById(matrixId).getElementsByTagName('input');

    for (var i = 0; i < inputs.length; i++) {
        var coords = inputs[i].id.split('-');
        var row = parseInt(coords[1]);
        var column = parseInt(coords[2]);
        var value = parseInt(inputs[i].value);

        if (!matrix[row]) {
            matrix[row] = [];
        }

        matrix[row][column] = value;
    }

    return matrix;
}

function randomizeMatrix(matrixId) {
    var inputs = document.getElementById(matrixId).getElementsByTagName('input');

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
    }
}

function displayMatrix(matrix, displayId) {
    var matrixDisplay = document.getElementById(displayId);
    matrixDisplay.innerHTML = ''; // Clear the previous matrix

    for (var i = 0; i < matrix.length; i++) {
        var row = document.createElement('div');
        for (var j = 0; j < matrix[i].length; j++) {
            var cell = document.createElement('span');
            cell.textContent = matrix[i][j];
            row.appendChild(cell);
        }
        matrixDisplay.appendChild(row);
    }
}

function addMatrices(matrix1, matrix2) {
    var result = [];
    for (var i = 0; i < matrix1.length; i++) {
        var row = [];
        for (var j = 0; j < matrix1[i].length; j++) {
            row.push(matrix1[i][j] + matrix2[i][j]);
        }
        result.push(row);
    }
    return result;
}

function subtractMatrices(matrix1, matrix2) {
    var result = [];
    for (var i = 0; i < matrix1.length; i++) {
        var row = [];
        for (var j = 0; j < matrix1[i].length; j++) {
            row.push(matrix1[i][j] - matrix2[i][j]);
        }
        result.push(row);
    }
    return result;
}

function multiplyMatrices(matrix1, matrix2) {
    var result = [];
    for (var i = 0; i < matrix1.length; i++) {
        var row = [];
        for (var j = 0; j < matrix2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < matrix1[0].length; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }
    return result;
}




