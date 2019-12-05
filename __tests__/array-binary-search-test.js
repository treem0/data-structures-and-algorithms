const { BinarySearch } = require('../challenge/arrayBinarySearch/array-binary-search');

describe('binary search', () => {
  it('should return the index of arrays element or -1 if it doesnt exist', () => {
    expect(BinarySearch([4, 8, 15, 16, 23, 42], 15)).toEqual(2);
    expect(BinarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toEqual(-1);
  });
});
