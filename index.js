// Code your solution in this file.
function lowerCaseDrivers (drivers) {
  return drivers.map(function (drivers){
    return drivers.toLowerCase();
  })
}

function nameToAttributes(drivers){
  return drivers.map(function (drivers){
    const driverNameFirst = driverName.split(' ')[0];
    const driverNameLast = driverName.split(' ')[1];
    return {firstName: driverNameFirst, lastName:driverNameLast};
  })
}
