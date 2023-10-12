document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var rows1 = parseInt(document.getElementById('rows1').value);
    var columns1 = parseInt(document.getElementById('columns1').value);
    var rows2 = parseInt(document.getElementById('rows2').value);
    var columns2 = parseInt(document.getElementById('columns2').value);
    var operation = document.getElementById('operation').value;

    var matrix1 = createMatrix(rows1, columns1);
    var matrix2 = createMatrix(rows2, columns2);

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

function createMatrix(rows, columns) {
    var matrix = [];
    for (var i = 0; i < rows; i++) {
        var row = [];
        for (var j = 0; j < columns; j++) {
            row.push(Math.floor(Math.random() * 10)); // Generate a random number between 0 and 9
        }
        matrix.push(row);
    }
    return matrix;
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



