
const simpleRemove = (list, index) => {
	list.splice(index, 1);
	return list;
};

const sliceRemove = (list, index) => {
	return list
		.slice(list, index)
		.concat(list.slice(index+1));
};

const es6Remove = (list, index) => {
	return [
		...list.slice(0, index),
		...list.slice(index + 1)
	];
};

module.exports = {
	simpleRemove, sliceRemove, es6Remove
}