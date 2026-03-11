const {} = require("../src/utils/array.js");

test('Chunk splits an array smaller chunk', () => {
   const array = [1,2,3,4,5];
   expect(chunk(array,2)).toEqual([[1,2],[3,4][5]])})
