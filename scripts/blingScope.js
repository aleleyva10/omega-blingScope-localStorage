var myApp = angular.module( 'myApp', [] );

myApp.controller( 'TestController', function(){
  var vm=this;

  vm.testClick = function(){
    console.log( 'in testClick' );
  }; // end testClick
}); // end TestController
