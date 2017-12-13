function mergesort(arr) {
    if (arr.length < 2) return arr;
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);

    return merge(mergesort(left), mergesort(right));
}

function merge(left, right) {
    let result = [];
    
    while(left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while(left.length) result.push(left.shift());
    while(right.length) result.push(right.shift());

    return result;
}

let arr = [4,2,6,1,2,5,9,3];
console.log(mergesort(arr));