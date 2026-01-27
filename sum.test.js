const sum= required ('./sum');

test('suma 3 + 4 debe ser 7', () => {
    expect(sum(3,4)).toBe(7);
});

test('suma -1 + 1 debe ser 0', () => {
    expect(sum(-1,1)).toBe(0);
});