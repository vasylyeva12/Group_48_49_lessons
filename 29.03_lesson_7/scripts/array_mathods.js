// .sort() - сортирует элементы массива, мутирует исходный массив
const numbers = [33, 1, 7, 3, 56]
numbers.sort()
//console.log(numbers); // [ 1, 3, 33, 56, 7 ] сортирует по первому символу

numbers.sort((a, b) => a-b) // [ 1, 3, 7, 33, 56 ] сортрует по возрастанию
//console.log(numbers);

numbers.sort((a, b) => b - a) // [ 56, 33, 7, 3, 1 ] сортирует по убыванию
//console.log(numbers);

//Сортируем массив из строк методом localeCompare

const names = ['Anna', 'Anton', 'Ivan', 'Pavel']
names.sort((a, b) => a.localeCompare(b))
//console.log(names); // [ 'Anna', 'Anton', 'Ivan', 'Pavel' ]

// Исходный массив не меняется, если сначала создать копию этого массива, а потом отсортировать.

const nums = [5, 24,  54, 2, 85, 334]

const nums_map = nums.map(el => el).sort((a, b) => a - b)

//console.log(nums);
//console.log(nums_map);

//  2-й способ создать копию массива, применить метод slice(), если в скобках не указывать аргумент, то создается копия.

const nums_slice = nums.slice().sort((a, b) => a -b)
//console.log(nums_slice);

//  3-й способ создать копию массива, применить spread оператор

const nums_spread = [...nums].sort((a, b) => a - b)
//console.log(nums_spread);

// .reduce() - возвращает аккумулирующее значение

const sum = nums.reduce((acc, el) => acc + el, 0)
console.log(sum);

// spread оператор = раскладывает массив на элементы

console.log(nums); // [ 5, 24, 54, 2, 85, 334 ]
console.log(...nums); // 5 24 54 2 85 334


