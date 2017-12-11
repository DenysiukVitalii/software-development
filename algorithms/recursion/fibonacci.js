const fibonacci = n => (n < 2) ? n : fibonacci(n-1) + fibonacci(n-2);

console.log(fibonacci(8)); 
console.log(fibonacci(10)); 
console.log(fibonacci(12)); 