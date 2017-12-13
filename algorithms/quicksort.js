function quicksort(arr) {
    if (arr.length <= 1) return arr;
    
    let left = [];
    let right = [];
    let pivot = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) { 
            left.push(arr[i]) 
        } else {
            right.push(arr[i]);
        }  
    }

    return [...quicksort(left), pivot, ...quicksort(right)];
}

let arr = [2,6,3,1,8,2,3,9,2,0,2,1];
console.log(quicksort(arr)); // [ 0, 1, 1, 2, 2, 2, 2, 3, 3, 6, 8, 9 ]