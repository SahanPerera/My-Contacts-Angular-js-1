var ContactsModule =  angular.module('Contacts.controllers',['Contacts.service'])
.controller('ContactsListController', function($scope,$location,$state,Contacts)
{
	// get all contact numbers
	Contacts.get().$promise.then(function success(response) {	
		//asign responce data 
		$scope.Contacts = response[0];
		
	}, function fail(response) {
		console.log(response[0]);
	});

    // function for delete the contact
    $scope.delete = function(contact_id) {
    	
		var deleteConform = confirm("Do You Want to Delete!");
		if (deleteConform == true) {
			Contacts.delete({id:contact_id}).$promise.then(function success(response) {	
				$state.reload();
				//console.log(response[0]);
			}, function fail(response) {
				console.log(response[0]);
			});
		    
		}
    };

})
.controller('ContactsAddController', function($scope,$location,ngToast,Contacts)
{

	$scope.contact = new Contacts;
	$scope.contact.status = '1';
	//functon for storing form data
	$scope.submitMyForm = function(formDate) {
		console.log($scope.contact);
		$scope.contact.$post().then(function success(response) {
			$location.path('contactlist');
			console.log('success');
			//succes massage from toast
			ngToast.create({
				className: 'success',
				content: '<a href="#" class="">Successfully Saved</a>'
			});
		}, function fail(response) {
			console.log('fail');
			//Error massage from toast
			ngToast.create({
				className: 'danger',
				content: '<a href="#" class="">Recode Does not Save</a>'
			});
		});
	}
	console.log('ContactsListController');
})
.controller('ContactsEditController', function($scope,$location,$state,$stateParams,ngToast,Contacts)
{


	Contacts.get({id:$stateParams.id}).$promise.then(function success(response) {	
		//asign responce data 
		$scope.contact = response[0];
		$scope.contact.status = String(response[0].status);
	}, function fail(response) {
	});
	// $scope.Contacts={};
	$scope.contactUpdate = function(formDate) {
		console.log($scope.contact);
		$scope.contact.$put().then(function success(response) {
			$location.path('contactlist');
			console.log('success');
			//succes massage from toast
			ngToast.create({
				className: 'success',
				content: '<a href="#" class="">Successfully Updated</a>'
			});
		}, function fail(response) {
			console.log('fail');
			//Error massage from toast
			ngToast.create({
				className: 'danger',
				content: '<a href="#" class="">Recode Does not Update</a>'
			});
		});
	}
	console.log('ContactsListController');
})
