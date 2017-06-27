var myApp = angular.module( 'myApp', [] );

myApp.controller( 'TestController', function(){
  var vm=this;

  vm.setLocalStorage = function(){
    console.log( 'in setLocalStorage:', vm.nameIn );
    localStorage.setItem( 'testy', vm.nameIn );
  }; // end testClick

  vm.showLocalStorage = function(){
    console.log( 'in showLocalStorage:', localStorage.getItem( 'testy' ) );
  }; // end testClick

  vm.login = function(){
    localStorage.setItem( 'loggedIn', true );
    console.log( localStorage.getItem( 'loggedIn' ) );
  }; //end log in

  vm.checkLogin = function(){
    var loggedIn = localStorage.getItem( 'loggedIn' );
    console.log( 'checking loggedIn:', loggedIn );
    if( loggedIn === 'true' ){
      console.log( 'welcome back,', localStorage.getItem( 'testy' ));
    }
    else{
      console.log( 'nope.');
    }
  };

}); // end TestController
