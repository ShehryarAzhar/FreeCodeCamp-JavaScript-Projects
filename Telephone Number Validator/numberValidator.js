// validate the following numbers
// 555-555-5555
// 1 555-555-5555
// 1 (555) 555-5555
// 5555555555
// 555-555-5555
// (555)555-5555
// 1(555)555-5555
// 1 555 555 5555
// 1 456 789 4444

// cannot validate following
// 123**&!!asdf#
// 0 (757) 622-7382
// 10 (757) 622-7382
// 2(757)622-7382
// 11 555-555-5555

function telephoneCheck(str) {
  let strRegex =
    /^(\d{3}|\(\d{3}\)|1[- ]?\d{3}|1[- ]?\(\d{3}\))[- ]?(\d{3})[- ]?(\d{4})$/;
  return strRegex.test(str);
}

telephoneCheck("555-555-5555");

console.log(telephoneCheck("1(555)555-5555"));
