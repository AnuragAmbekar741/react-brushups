// Function 1: Copy array and divide each element by 2
function copyArrayAndDivideBy2(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] / 2);
    }
    return result;
}



// Function 2: Copy array and multiply each element by 2
function copyArrayAndMultiplyBy2(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] * 2);
    }
    return result;
}

// Function 3: Copy array and add 3 to each element
function copyArrayAndAdd3(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] + 3);
    }
    return result;
}


//Copy Array and Manupilate
function copyArrayAndManupilate(array, instructions) {
    const output = []
    for (let i = 0; i < array.length; i++) {
        output.push(instructions(arr[i]))
    }
    return output
}

function multiplyBy2(input) {
    return input * 2
}

function divideBy2(input) {
    return input / 2
}

copyArrayAndManupilate([12, 13, 14], multiplyBy2)
copyArrayAndManupilate([12, 13, 14], divideBy2)
