// Code your solution in this file.
function lowerCaseDrivers (drivers, callback) {
  const newArr = [];

  for (const element of drivers) {
    newArr.push(callback(element));
  }
}
