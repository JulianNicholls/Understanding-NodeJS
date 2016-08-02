// Our own Angular code.

angular.module('Angular1', []);

angular.module('Angular1')
  .controller('MainController', ctrlFunc);


function ctrlFunc() {
  this.people = clientPeople;
}
