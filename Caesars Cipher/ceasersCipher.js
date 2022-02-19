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
    if (/\W/.test(str[i])) {
      result += str[i];
      continue;
    }
    let alphaIndex = ALPHABETS.indexOf(str[i]);
    let newAlphaIndex = alphaIndex + 13;

    if (newAlphaIndex >= ALPHABETS.length) {
      for (let j = 0; j < alphaIndex; j++) {
        if (ALPHABETS.length - alphaIndex + j === 13) {
          newAlphaIndex = j;
          result += ALPHABETS[newAlphaIndex];
        }
      }
    } else {
      result += ALPHABETS[newAlphaIndex];
    }
  }

  return result;
}

rot13("SERR PBQR PNZC");
