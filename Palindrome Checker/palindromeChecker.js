function stringWithOnlyAlphanumeric(str) {
  return str.replace(/[\W_]/gi, "");
}

function stringToLowerCase(str) {
  return str.toLowerCase();
}

function reverseString(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
  return result;
}

function palindrome(str) {
  // clean up the string remove non-alphanumeric
  let cleanedUpStr = stringWithOnlyAlphanumeric(str);
  console.log(cleanedUpStr);

  // convert to lowerCase
  let lowerCasedStr = stringToLowerCase(cleanedUpStr);

  // reverse the string
  let reversedStr = reverseString(lowerCasedStr);

  return lowerCasedStr === reversedStr;
}

palindrome("eye");
