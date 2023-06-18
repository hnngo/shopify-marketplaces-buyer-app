function add(a, b) {
  return a + b;
}

describe('Home', () => {
  it('Testing', () => {
    expect(add(1, 2)).toBe(3);
  })
});
