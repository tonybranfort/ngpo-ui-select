var ngApp = angular.module('ngApp',['ngSanitize', 'ui.select'])
  .controller('MyCtrl', MyCtrl);

function MyCtrl($scope) {
  // https://github.com/angular-ui/ui-select
  // http://plnkr.co/edit/a3KlK8dKH3wwiiksDSn2?p=preview
  // http://plnkr.co/edit/juqoNOt1z1Gb349XabQ2?p=preview
  
  $scope.multipleDemo = {};
  $scope.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];  

  $scope.person = {};
  $scope.people = [
    { name: 'Adam',      email: 'adam@email.com',      age: 10 },
    { name: 'Amalie',    email: 'amalie@email.com',    age: 12 },
    { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30 },
    { name: 'Samantha',  email: 'samantha@email.com',  age: 31 },
    { name: 'Estefanía', email: 'estefanía@email.com', age: 16 },
    { name: 'Natasha',   email: 'natasha@email.com',   age: 54 },
    { name: 'Nicole',    email: 'nicole@email.com',    age: 43 },
    { name: 'Adrian',    email: 'adrian@email.com',    age: 21 }
  ];

  $scope.blankets = [
    'Blue',
    'Yellow',
    'Maroon',
    'Red'
  ];


  $scope.crayons = [
    ['Green','Yellow'],
    ['Turquoise'],
    ['Maroon'],
  ];

}
