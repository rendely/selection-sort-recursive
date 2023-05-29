function selectionSortRecursive(arr) {

  if (arr.length <= 1) return arr;
  const minVal = Math.min(...arr);
  const minIndex = arr.indexOf(minVal);
  arr.splice(minIndex,1);
  return [minVal, ...selectionSortRecursive(arr)]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
