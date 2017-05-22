const expect = require("expect");
const deepFreeze = require("deep-freeze");
const removeActions = require("./../remove");


describe('Remove item to array', function() {

	it('simple remove, not functional', function() {  
		const listBefore = [1,2,3,4,5];
		const listAfter = [1,2,4,5];

		
		deepFreeze(listBefore);
		
		expect(function () {
			removeActions.simpleRemove(listBefore, 2)
		}).toThrow();
	});


	it('slice remove', function() {  
		const listBefore = [1,2,3,4,5];
		const listAfter = [1,2,4,5];

		deepFreeze(listBefore);
		
		expect(removeActions.sliceRemove(listBefore, 2)).toEqual(listAfter);
	});

	it('es6 remove', function() {  
		const listBefore = [1,2,3,4,5];
		const listAfter = [1,2,4,5];

		deepFreeze(listBefore);
		
		expect(removeActions.es6Remove(listBefore, 2)).toEqual(listAfter);
	});

});