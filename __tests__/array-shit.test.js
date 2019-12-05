const { insertShiftArray } = require('../challenges/arrayShift/array-shift.js');

describe('array shift', () => {
  it('should input a value into the middle of an array', () => {
    expect(insertShiftArray([1, 2, 3, 4], 5)).toEqual([1, 2, 5, 3, 4]);
  });
})
;
