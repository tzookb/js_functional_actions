const expect = require("expect");
const deepFreeze = require("deep-freeze");
const pushActions = require("./../push");

describe('Push item to array', function() {

	it('it should failed, as not functional', function() {  
		const listBefore = [];
		const listAfter = [0];

		deepFreeze(listBefore);
		
		expect(function () {
			pushActions.simplePush(listBefore, 0)
		}).toThrow();
	});

	it('concat push', function() {  
		const listBefore = [];
		const listAfter = [0];

		deepFreeze(listBefore);
		
		expect(pushActions.concatPush(listBefore, 0)).toEqual(listAfter);
	});

	it('es6 push', function() {  
		const listBefore = [];
		const listAfter = [0];

		deepFreeze(listBefore);
		
		expect(pushActions.es6Push(listBefore, 0)).toEqual(listAfter);
	});

});