function insertShiftArray(arr, value) {
    let tmp = [...arr];

    for(let i = 0; i < arr.length; i++){
        let num = (arr.length - i) + value;
        arr[i] = tmp[num];
    }  

    return arr;
}

console.log(insertShiftArray([1, 2, 3, 4, 5], 5));


export default insertShiftArray();