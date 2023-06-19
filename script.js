// complete the given function

function palindrome(str) {
  let start = 0;
  let end = str.length - 1;
  
  while (start < end) {
    if (str[start] !== str[end]) {
      return false; // Characters don't match, not a palindrome
    }
    
    start++;
    end--;
  }
  
  return true;
module.exports = palindrome
