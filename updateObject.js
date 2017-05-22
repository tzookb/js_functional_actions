
const simpleUpdate = (obj, key, val) => {
	obj[key] = val;
	return obj;
};

const assignUpdate = (obj, key, val) => {
	let updateObj = {};
	updateObj[key] = val;
	return Object.assign({}, obj, updateObj);
};

module.exports = {
	simpleUpdate, assignUpdate
}