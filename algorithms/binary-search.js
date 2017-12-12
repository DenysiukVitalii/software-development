Array.prototype.binary_search = function (value) {
    let arr = this.map((i) => i);
    let high = arr.length - 1;
    let low = 0;
    let mid = 0;
    
    while (low <= high) {
        mid = Math.floor((high + low) / 2);
        if (arr[mid] === value) {
            return mid;
        } else if (value > arr[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

let arr = [1,6,8,14,16,23,40];
console.log(arr.binary_search(16));
