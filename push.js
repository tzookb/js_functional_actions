
const simplePush = (list, item) => {
	list.push(item);
	return list;
};

const concatPush = (list, item) => {
	return list.concat([item]);
};

const es6Push = (list, item) => {
	return [...list, item];
};

module.exports = {
	simplePush, concatPush, es6Push
}