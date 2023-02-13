function palindrome(str) {
    let regexp = /[a-zA-Z0-9]/g

    let strRgx = str.match(regexp).join("")
    
    let reverseArr = [];

    for(let i = 0; i < strRgx.length; i++){
        reverseArr.unshift(strRgx[i]);
    }

    return reverseArr.join("").toUpperCase() === strRgx.toUpperCase();
}

console.log(palindrome("ex &e"));
