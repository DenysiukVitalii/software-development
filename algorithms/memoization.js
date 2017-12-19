const add = (n) => (n + 10);
console.log('Simple call', add(3));

const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  }
}

const memoizedAdd = memoize(add);
console.log(memoizedAdd(3));  // calculated
console.log(memoizedAdd(3));  // from cache
console.log(memoizedAdd(4));  // calculated
console.log(memoizedAdd(4));  // from cache