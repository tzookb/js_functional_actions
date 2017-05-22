
const simpleUpdate = (list, index, value) => {
	list[index] = value;
	return list;
};

const sliceUpdate = (list, index, value) => {
	return list
		.slice(list, index)
		.concat([value])
		.concat(list.slice(index+1));
};

const es6Update = (list, index, value) => {
	return [
		...list.slice(0, index),
		value,
		...list.slice(index + 1)
	];
};

module.exports = {
	simpleUpdate, sliceUpdate, es6Update
}