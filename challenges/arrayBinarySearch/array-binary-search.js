const BinarySearch = (sortedArray, searchKey) => {
  for(let i = 0; i < sortedArray.length; i++){
    if(i === searchKey){
      return searchKey;
    }
    else return -1;
  }
};


module.exports = { BinarySearch };
