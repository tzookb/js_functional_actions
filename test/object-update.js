const expect = require("expect");
const deepFreeze = require("deep-freeze");
const updateObject = require("./../updateObject");

describe('Update item in object', function() {

	it('it should failed, as not functional', function() {  
		const objBefore = {a: 1};
		const objAfter = {a: 2};

		deepFreeze(objBefore);
		
		expect(
			updateObject.simpleUpdate(objBefore, "a", 2)
			).toEqual(objBefore);
	});


	it('es6 object update', function() {  
		const objBefore = {a: 1};
		const objAfter = {a: 2};

		deepFreeze(objBefore);
		
		expect(
			updateObject.assignUpdate(objBefore, "a", 2)
			).toEqual(objAfter);
	});
	
});