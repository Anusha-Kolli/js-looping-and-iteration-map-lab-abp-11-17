// Code your solution in this file.
function lowerCaseDrivers (drivers) {
  const newArr = [];

  for (const element of drivers) {
    newArr.push(drivers.toLowerCase(element));
  }
  return newArr;
}
