// list of all alphabets
const ALPHABETS = [
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

function rot13(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    // if current word is not an alphabet then simply add it to result as it is and continue to next loop
    if (/\W/.test(str[i])) {
      result += str[i];
      continue;
    }

    // index of current of alphabet
    let currentAlphaIndex = ALPHABETS.indexOf(str[i]);
    // index of new alphabet that will replace
    let newAlphaIndex = currentAlphaIndex + 13;

    /* if after adding 13 index of new alphabet doesn't exceeds or equals Alphabets length
      then simply add the new alphabet at the correspding newIndex to the result
    */
    if (!newAlphaIndex >= ALPHABETS.length) {
      result += ALPHABETS[newAlphaIndex];
    } else {
      /* 'S' -> 18  newIndex = 18 + 13 = 31 > AlphabetsLength(26)
      now subtract 18 from 26  26 - 18 = '8'
      8 + 5 = 13 so '5' will be the index of new alphabet
      */
      for (let j = 0; j < currentAlphaIndex; j++) {
        if (ALPHABETS.length - currentAlphaIndex + j === 13) {
          newAlphaIndex = j;
          result += ALPHABETS[newAlphaIndex];
        }
      }
    }
  }

  return result;
}

rot13("SERR PBQR PNZC");
