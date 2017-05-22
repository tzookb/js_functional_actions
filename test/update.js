const expect = require("expect");
const deepFreeze = require("deep-freeze");
const updateActions = require("./../update");

describe('Update item in array', function() {

	it('it should failed, as not functional', function() {  
		const listBefore = [0,1,2];
		const listAfter = [5,1,2];

		deepFreeze(listBefore);
		
		expect(
			updateActions.simpleUpdate(listBefore, 0, 5)
			).toEqual(listBefore);
	});


	it('concat update', function() {  
		const listBefore = [0,1,2];
		const listAfter = [5,1,2];

		deepFreeze(listBefore);
		
		expect(updateActions.sliceUpdate(listBefore, 0, 5)).toEqual(listAfter);
	});

	it('es6 update', function() {  
		const listBefore = [0,1,2];
		const listAfter = [5,1,2];

		deepFreeze(listBefore);
		
		expect(updateActions.es6Update(listBefore, 0, 5)).toEqual(listAfter);
	});
});