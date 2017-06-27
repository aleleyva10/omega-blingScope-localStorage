var myApp = angular.module( 'myApp', [] );

myApp.controller( 'TestController', function( $scope ){
  $scope.things = [
    'asdf',
    'qwer',
    'zxcv'
  ]; // end things

  $scope.testClick = function(){
    console.log( 'in testClick' );
  }; // end testClick
}); // end TestController
