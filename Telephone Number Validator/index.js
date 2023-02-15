function telephoneCheck(str) {
  let regexNormalNumbers = /^\d{3}\s?\-?\d{3}\-?\s?\d{4}$/;
  let bracketRegex = /^\(\d{3}\)\s?\d{3}\-\d{4}$/;
  let startWithOneNormalRegex = /^1\s\d{3}\s?\-?\d{3}\-?\s?\d{4}$/;
  let startWithOneBracketRegex = /^1\s?\(\d{3}\)\s?\d{3}\-\d{4}$/;

  if (
    regexNormalNumbers.test(str) ||
    bracketRegex.test(str) ||
    startWithOneNormalRegex.test(str) ||
    startWithOneBracketRegex.test(str)
  ) {
    return true;
  }

  return false;
}

console.log(telephoneCheck("555-555-5555"));
