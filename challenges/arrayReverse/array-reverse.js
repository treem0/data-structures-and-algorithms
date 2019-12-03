function reverseArray(arr) {
    let output = [];
    while(arr.length) {
        output.push(arr.pop());
    }

    return output;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

export default reverseArray();