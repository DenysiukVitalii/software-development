/* Task:
    Implement a function to calculate the sum of the numerical values in a nested list. For example :
    sumNested([1, [2, [3, [4]]]]) => 10
*/

const sumNested = arr => { 
  if (!arr || !arr.length) return 0; 
  let res = []; 
  arr.forEach(e => { 
    res = res.concat((Array.isArray(e)) ? sumNested(e) : e) 
  }); 
  return res.reduce((a, b) => a + b); 
}

console.log(sumNested([1, [1], [1, [1]], [1, [1], [1, [1]]]]));
console.log(sumNested([1, [1], [[1]], [[[1]]]])); 
console.log(sumNested([[1, 2, 3, 4]]));
console.log(sumNested([]));