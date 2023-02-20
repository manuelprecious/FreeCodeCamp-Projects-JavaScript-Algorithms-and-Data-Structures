function checkCashRegister(price, cash, cid) {
  //Calculating the change
  let change = cash * 100 - price * 100;

  //Multiplying each value from the cid by 100 and then reversing the array
  let cidMultiplyBy100 = [];
  cid.forEach((element) => {
    let newMultipliedValue = Math.round(element[1] * 100);
    cidMultiplyBy100.push([element[0], newMultipliedValue]);
  });

  //Calculating the total amount of cash in the drawer
  let totalCID = 0;
  for (let i = 0; i < cidMultiplyBy100.length; i++) {
    totalCID += cidMultiplyBy100[i][1];
  }

  let reversedArray = cidMultiplyBy100.reverse();

  //Defining an object to collect the results
  let result = {
    status: "INSUFFICIENT_FUNDS",
    change: [],
  };

  // Defining an object for storing curriencies and their values
  let currencyUnit = [
    { name: "ONE HUNDRED", value: 10000 },
    { name: "TWENTY", value: 2000 },
    { name: "TEN", value: 1000 },
    { name: "FIVE", value: 500 },
    { name: "ONE", value: 100 },
    { name: "QUARTER", value: 25 },
    { name: "DIME", value: 10 },
    { name: "NICKEL", value: 5 }, 
    { name: "PENNY", value: 1 },
  ];

  if (change === totalCID) {
    result.status = "CLOSED";
    result.change = cid;
  }

  if (totalCID > change) {
    let newChange = change;
    let sumOfAllSubtractedValue = 0;
    let sumArrs = [];
ff3edws2xz``
    for (let i = 0; i < reversedArray.length; i++) {
      let cashRemainderForEachElementInDrawer = reversedArray[i][1];
      let eachCoinAndNote = currencyUnit[i].value;
      let subtractedChange = 0;

      while (
        cashRemainderForEachElementInDrawer > 0 &&
        newChange >= eachCoinAndNote
      ) {
        subtractedChange += currencyUnit[i].value;
        newChange -= currencyUnit[i].value;
        cashRemainderForEachElementInDrawer -= currencyUnit[i].value;
      }
      sumOfAllSubtractedValue += subtractedChange;
      sumArrs.push([reversedArray[i][0], subtractedChange / 100]);
    }

    if (sumOfAllSubtractedValue === change) {
      result.status = "OPEN";
      result.change = sumArrs.filter((item) => item[1] > 0);
    }
  }

  return result;
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

