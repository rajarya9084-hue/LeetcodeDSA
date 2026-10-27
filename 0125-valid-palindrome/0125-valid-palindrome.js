
let isPalindrome = function(s) {
    let str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let rev = str.split("").reverse().join("");

    if (str === rev) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car")); 
console.log(isPalindrome(" "));
