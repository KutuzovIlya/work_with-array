const arr = ['apple', ':)', 'bla', 'zerro', 'cocos', 'tom', 'dom', '1', 'macbook', 'one two three'];

const filter_arr = [];

console.log('До фильтрации: ', arr);

for(let i=0; i < arr.length; i++) {
	if (arr[i].length <= 3) {
		filter_arr.push(arr[i])
	}
};

console.log('Отфильтрованный массив: ', filter_arr)

