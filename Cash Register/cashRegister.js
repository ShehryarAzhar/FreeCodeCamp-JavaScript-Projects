function checkCashRegister(price, cash, cid) {
  // all currency bills
  const CURRENCY_BILLS = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  // toal change to be given
  const totalChange = cash - price;

  // total cash available in the drawer
  const TOTALCASH = cid.reduce((acc, item) => {
    return acc + item[1];
  }, 0);

  // if change is equal to the cash-in-drawer then give all the cash-in-drawer
  if (totalChange === TOTALCASH) {
    return { status: "CLOSED", change: cid };
  }
  // var for available cash in cid after taking out some cash
  let availableCash = [...cid].reverse();

  // var for remaining change
  let changeDue = totalChange;
  // 2d array to be returned having the change
  const CHANGE = [];

  // check from highet to lowest currency value in cid to return the change
  for (let elem of availableCash) {
    let temp = ["bill", 0];

    if (
      elem[1] >= CURRENCY_BILLS[elem[0]] &&
      changeDue >= CURRENCY_BILLS[elem[0]]
    ) {
      temp[0] = elem[0];
      while (
        elem[1] >= CURRENCY_BILLS[elem[0]] &&
        changeDue >= CURRENCY_BILLS[elem[0]]
      ) {
        changeDue -= CURRENCY_BILLS[elem[0]];
        elem[1] -= CURRENCY_BILLS[elem[0]];
        temp[1] += CURRENCY_BILLS[elem[0]];

        // javaScript doesn't play nicely with the floating points therfore we have to fix the floating points to 2
        changeDue = changeDue.toFixed(2);
      }
      CHANGE.push(temp);
    }
  }

  // if still changeDue is greater than zero then return INSUFFICIENT_FUNDs
  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // if everything is passed then return the change to the customer
  return { status: "OPEN", change: CHANGE };
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
