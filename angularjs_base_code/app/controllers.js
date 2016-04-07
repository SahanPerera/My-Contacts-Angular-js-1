var ContactsModule =  angular.module('Contacts.controllers',[])
.controller('ContactsListController', function($scope,$location)
{
	$scope.contacts=[
                        {id:1,name:"Sahan",contact_no:"0711332607",address:"Gampaha",email:"csahanperera@gamil.com",staus:"1"},
                        {id:2,name:"Maduranga",contact_no:"072247288",address:"Kirulapone",email:"lmaduranga@gamil.com",staus:"1"},
                        {id:3,name:"Prassanna",contact_no:"0722247261",address:"Monaragala",email:"prassanna@gamil.com",staus:"1"},
                        {id:4,name:"Ashfan",contact_no:"0722247221",address:"Pasyala",email:"ashfan@gamil.com",staus:"1"},
                        {id:5,name:"Nadeesha",contact_no:"0722247277",address:"Kalaniya",email:"nadeesha@gamil.com",staus:"1"},
                    ];
    // function for delete the contact
    $scope.delete = function() {
    	alert('delete');
    };

})
.controller('ContactsAddController', function($scope,$location)
{
	$scope.contact={};
	$scope.contactSave = function(formDate) {
		console.log($scope.contact);
		// $scope.contact.$post().then(function success(response) {
		// 	console.log('success');
		// 	//TODO:: Show succes msg 
		// }, function fail(response) {
		// 	console.log('fail');
		// 	//TODO:: Show error
		// });
	}
	console.log('ContactsListController');
})

