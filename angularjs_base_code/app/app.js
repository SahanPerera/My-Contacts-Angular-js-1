angular.module('myContactBook', ['ui.router','Contacts.controllers','angularValidator','ngToast','mydirectives'])

.config(function($stateProvider, $urlRouterProvider) {
 
  $stateProvider    
    .state('template1', {
        abstract:true,  
        // url: '/template1',        
        templateUrl: 'views/templates/template1.html' 
    })     
    .state('template1.contactlist', {
        url: '/contactlist', 
        templateUrl: 'views/contactlist.html',
        controller:'ContactsListController'
    })
    .state('template1.contactedit', {
        url: '/contactedit/:id', 
        templateUrl: 'views/contactedit.html',
        controller:'ContactsEditController'
    })
    .state('template1.contactadd', {
        url: '/contactadd', 
        templateUrl: 'views/contactadd.html',
        controller:'ContactsAddController'
    })  
    $urlRouterProvider.otherwise('/contactlist');

})
.run(function(){ });