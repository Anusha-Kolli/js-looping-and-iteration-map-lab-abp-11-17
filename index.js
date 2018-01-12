// Code your solution in this file.
function lowerCaseDrivers (drivers) {
  return drivers.map(function (drivers){
    return drivers.toLowerCase();
  })
}

function nameToAttributes(drivers){
  return drivers.map(function (drivers){
    const driversFirst = driverName.split(' ')[0];
    const driversLast = driverName.split(' ')[1];
    return {firstName: driversFirst, lastName:driversLast};
  })
}
