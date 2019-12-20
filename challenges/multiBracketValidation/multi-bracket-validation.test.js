const multiBracketValidation = require('./multi-bracket-validation');

describe('multiBracketValidation function', () => {
  it('validates if the brackets are balanced', () => {
    expect(multiBracketValidation('[](){}')).toBeTruthy();
    expect(multiBracketValidation('{}')).toBeTruthy();
    expect(multiBracketValidation('()')).toBeTruthy();
    expect(multiBracketValidation('()1[]')).toBeTruthy();
    expect(multiBracketValidation('(1)')).toBeTruthy();
    expect(multiBracketValidation('[')).toBeFalsy();
  });
});
