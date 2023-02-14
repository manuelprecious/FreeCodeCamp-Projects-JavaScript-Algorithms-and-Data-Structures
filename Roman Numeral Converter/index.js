function convertToRoman(num) {
  // The logic for separating Values and adding placeholder Zeros
  let splitNum = num.toString().split("");

  let separatedPlaceValues = [];
  let convertedValues = [];

  function placeholderZeros(index, arrLength) {
    let num = "";
    let placeholderlength = arrLength - index - 2;

    for (let i = 0; i <= placeholderlength; i++) {
      num = num + "0";
    }

    return num;
  }

  for (let i = 0; i < splitNum.length; i++) {
    separatedPlaceValues.push(
      splitNum[i] + placeholderZeros(i, splitNum.length)
    );
  }

  //Function to test for length and convert
  function testAndConvert(arrayItem, objParam) {
    let placeHolderPositions = {
      ones: { one: "I", five: "V" },
      tens: { one: "X", five: "L" },
      hundreds: { one: "C", five: "D" },
      thousands: { one: "M" },
    };
    if (Number(arrayItem[0]) === 1) {
      convertedValues.push(placeHolderPositions[objParam].one);
    }

    if (Number(arrayItem[0]) === 2) {
      convertedValues.push(
        placeHolderPositions[objParam].one + placeHolderPositions[objParam].one
      );
    }

    if (Number(arrayItem[0]) === 3) {
      convertedValues.push(
        placeHolderPositions[objParam].one +
          placeHolderPositions[objParam].one +
          placeHolderPositions[objParam].one
      );
    }

    if (Number(arrayItem[0]) === 4) {
      convertedValues.push(
        placeHolderPositions[objParam].one + placeHolderPositions[objParam].five
      );
    }

    if (Number(arrayItem[0]) === 5 && objParam != "thousands") {
      convertedValues.push(placeHolderPositions[objParam].five);
    }

    if (Number(arrayItem[0]) === 6) {
      convertedValues.push(
        placeHolderPositions[objParam].five + placeHolderPositions[objParam].one
      );
    }

    if (Number(arrayItem[0]) === 7) {
      convertedValues.push(
        placeHolderPositions[objParam].five +
          placeHolderPositions[objParam].one +
          placeHolderPositions[objParam].one
      );
    }

    if (Number(arrayItem[0]) === 8) {
      convertedValues.push(
        placeHolderPositions[objParam].five +
          placeHolderPositions[objParam].one +
          placeHolderPositions[objParam].one +
          placeHolderPositions[objParam].one
      );
    }

    if (Number(arrayItem[0]) === 9 && objParam === "ones") {
      convertedValues.push(
        placeHolderPositions[objParam].one + placeHolderPositions.tens.one
      );
    }
    if (Number(arrayItem[0]) === 9 && objParam === "tens") {
      convertedValues.push(
        placeHolderPositions[objParam].one + placeHolderPositions.hundreds.one
      );
    }
    if (Number(arrayItem[0]) === 9 && objParam === "hundreds") {
      convertedValues.push(
        placeHolderPositions[objParam].one + placeHolderPositions.thousands.one
      );
    }
  }

  // Loop to check for position and length
  for (let i = 0; i < separatedPlaceValues.length; i++) {
    let itemLength = separatedPlaceValues[i].length;

    if (itemLength === 4) {
      testAndConvert(separatedPlaceValues[i], "thousands");
    }

    if (itemLength === 3) {
      testAndConvert(separatedPlaceValues[i], "hundreds");
    }

    if (itemLength === 2) {
      testAndConvert(separatedPlaceValues[i], "tens");
    }

    if (itemLength === 1) {
      testAndConvert(separatedPlaceValues[i], "ones");
    }
  }
  return convertedValues.join("");
}

console.log(convertToRoman(990));
