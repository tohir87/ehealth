describe('PouchDB Put', function() {

	beforeEach(module('inventory'));

	var drugCtrl,
	scope;

	beforeEach(inject(function ($rootScope, $controller) {
		scope = $rootScope.$new();
		drugCtrl = $controller('drugCtrl', {
			$scope: scope
		});
	}));
	
	it('Save data into pouch db', function () {
		//expect().toEqual("daga");
	});

});