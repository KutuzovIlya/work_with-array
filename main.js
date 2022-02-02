const arr = ['apple', ':)', 'bla', 'zerro', 'cocos', 'tom', 'dom'];

const filter_arr = [];

for(let i=0; i < arr.length; i++) {
	if (arr[i].length <= 3) {
		filter_arr.push(arr[i])
	}
};

console.log('Filter data: ', filter_arr)

