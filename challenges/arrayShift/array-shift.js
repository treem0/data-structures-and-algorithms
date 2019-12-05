function insertShiftArray(arr, value) {
  const newArray = [];
  const midIndex = Math.ceil((arr.length) / 2);
  for(let i = 0; i < arr.length + 1; i++){
    if(i < midIndex) {
      newArray[i] = arr[i];
    }
    if(i === midIndex) {
      newArray[i] = value;
    }
    if(i > midIndex) {
      newArray[i] = arr[i - 1];
    }

  }  

  return newArray;
}

console.log(insertShiftArray([1, 2, 3, 4, 5], 5));


module.exports = { insertShiftArray };
