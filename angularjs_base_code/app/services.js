var url ='https://my-contacts-laravel-api-sahan.c9users.io/laravel/public/api/v1/';

var ContactsServices = angular.module('Contacts.service', ['ngResource']);

ContactsServices.factory('Contacts', function ($resource) {
     return $resource(url+'contact/:id', {}, {
        create: { method: 'POST' },
        get: { method: 'GET' ,params: {id: '@id'},isArray:true},
        query: { method: 'GET' ,params: {id: '@id',isArray:false}},
        update: { method: 'put' ,params: {id: '@id'}},
        delete: { method: 'DELETE' ,params: {id: '@id'}}
    });
});