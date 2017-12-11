/* Task:
    A person's Life Path Number is calculated by adding each individual number 
    in that person's date of birth, untill it is reduced to a single digit number.

    For example, Albert Einstein's birthday is March 14, 1879. 
    The calculation of his Life Path Number would look like this:

    year: 1 + 8 + 7 + 9 = 25; 2 + 5 = 7
    month: 0 + 3 = 3
    day: 1 + 4 = 5
    final result: 7 + 3 + 5 = 15; 1 + 5 = 6
    Einstein's Life Path Number is therefore: 6
*/

function lifePathNumber(dateOfBirth) {
    let arr_birth = dateOfBirth.split('-');
    let lifenum = [];
    arr_birth.forEach(e => lifenum.push(sumOfNumber(e)));
    let result = lifenum.reduce((a, b) => a + b);
    return (result > 9) ? sumOfNumber(result) : result;
}

function sumOfNumber(number) {
    let arr = (number + '').split('');
    let sum = arr.reduce((a, b) => +a + +b);
    return (sum > 9) ? sumOfNumber(sum) : sum;
}


console.log(lifePathNumber("1879-03-14"));
console.log(lifePathNumber("1815-12-10"));
console.log(lifePathNumber("1452-04-15"));
console.log(lifePathNumber("1791-12-26"));
console.log(lifePathNumber("1971-06-28"));