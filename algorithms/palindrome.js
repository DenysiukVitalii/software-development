'use strict';

function isPalindrome(str){
  let len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i])
       return false;
  }
  return true;
}

function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}

console.log(isPalindrome('anna')); // true
console.log(isPalindrome('apple')); // false
