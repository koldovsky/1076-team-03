//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
  const radius = circle.radius;
  const result = 2 * Math.PI * radius;
  return parseFloat(result.toFixed(6));
}

//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
  const giveMeFiveArray = [];
  for (const key in obj) {
    if (key.length === 5) {
      giveMeFiveArray.push(key);
    }
    if (obj[key].length === 5) {
      giveMeFiveArray.push(obj[key]);
    }
  }
  return giveMeFiveArray;
}
