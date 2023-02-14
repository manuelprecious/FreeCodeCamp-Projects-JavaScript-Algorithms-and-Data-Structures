function rot13(str) {
  let splitEncryptedStr = str.split("");
  let decryptedLetters = [];
  let letter = /[a-zA-Z]/;

  let letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  for (let i = 0; i < splitEncryptedStr.length; i++) {
    let greaterThan13 = letters.indexOf(splitEncryptedStr[i]) >= 13;
    let isAlphabet = letter.test(splitEncryptedStr[i]);
    let lessthanOrEqual13 = letters.indexOf(splitEncryptedStr[i]) < 13;

    if (greaterThan13 && isAlphabet) {
      let newIndex = letters.indexOf(splitEncryptedStr[i]) - 13;
      decryptedLetters.push(letters[newIndex].toUpperCase());
    } else if (lessthanOrEqual13 && isAlphabet) {
      let newIndex = letters.indexOf(splitEncryptedStr[i]) + 13;
      decryptedLetters.push(letters[newIndex].toUpperCase());
    } else {
        decryptedLetters.push(splitEncryptedStr[i]);
    }
  }
  return decryptedLetters.join("");
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
