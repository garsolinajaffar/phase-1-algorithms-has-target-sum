function hasTargetSum(arr, target) {
  // code goes here
}
function hasTargetSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
}
function hasTargetSum(arr, target) {
  const differences = {};
  for (let i = 0; i < arr.length; i++) {
    if (differences[arr[i]]) {
      return true;
    }
    differences[target - arr[i]] = true;
  }
  return false;
}
