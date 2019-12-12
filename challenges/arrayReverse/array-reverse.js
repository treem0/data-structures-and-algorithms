function reverseArray(arr) {
  let tmp = [...arr];

  for(let i = 0; i < arr.length; i++){
    let num = (arr.length - i) - 1;
    arr[i] = tmp[num];
  }  

  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

export default reverseArray();
