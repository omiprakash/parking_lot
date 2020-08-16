let searchCar = async (slot, prop, cars) => {
    for (var i = 0; i < cars.length; i++) {
      if (cars[i][prop] === slot) {
        return cars[i];
      }
    }
    return false;
  }
  
  let removeCar = async (slot, prop, cars) => {
    var i = cars.length;
    while (i--) {
      if (cars[i]
        && cars[i].hasOwnProperty(prop)
        && (cars[i][prop] === slot)) {
        cars.splice(i, 1);
      }
    }
    return cars;
  }

  module.exports = {
    searchCar,
    removeCar
  }
  