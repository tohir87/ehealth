'use strict';

var inventoryApp = angular.module('inventory', []);

inventoryApp.controller('drugCtrl', function ($scope) {

	$scope.drugs = {drug_name: '', description: '', quantity:''};
    
    $scope.saveDrug = function () {
		
		var db = new PouchDB('inventoryDb');
		var id_ = Date.now();
		var drug_details = {
		  _id: $scope.drugs.drug_name,
		  drug_name: $scope.drugs.drug_name,
		  description: $scope.drugs.description,
		  quantity: parseInt($scope.drugs.quantity)
		};
		
		db.put(drug_details, function callback(error, result){
			console.log(error);
			if (!error){
				toastr["success"]("Operation was successful");
			}
		});
    };

});
