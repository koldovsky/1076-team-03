//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
const stringToArray = (string) => string.split(" ");

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}

//https://www.codewars.com/kata/577a98a6ae28071780000989/solutions/javascript
var min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

var max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  arr.sort((a, b) => a - b);
  if (toReturn === "value") {
    return arr[0];
  } else if (toReturn === "index") {
    return arr.indexOf(arr[0]);
  }
}
