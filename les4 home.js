// 1. Дан массив timesTenIfOverFive. Обойдите массив, и числа, которые больше 8, увеличьте на 10. Выведите на экран обновленный массив.

const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];

function increaseByTen(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 8) arr[i] += 10;
    }
    console.log(arr);
}

increaseByTen(timesTenIfOverFive);

// 2. Дан объект checkObj. Обойдите его циклом for..in, и числа, которые больше или равны двум, добавьте в массив objToArray. Выведите результат.

const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18,
};
const objToArray = [];

function check(obj, arr) {
    for(let prop in obj) {
        if(obj[prop] >= 2) arr.push(obj[prop]);
    }
}

check(checkObj, objToArray);

// 3. Дан массив possibleIterable. Обойдите его циклом, разделяя каждое значение на три. Получившиеся результаты запишите в объект divByThree (ключом должен быть индекс элементв, значением - получившийся результат после деления).

const possibleIterable = [4, 3, 9, 6, 23];
const divByThree = {};

function divideByThreeToObj(arr, obj) {
    for(let i = 0; i < arr.length;i++) {
        obj[i] = arr[i] / 3;
    }
}

divideByThreeToObj(possibleIterable, divByThree);

// 4. Дан объект sumMe. Обойдите его циклом, и посчитайте количество ключей, значением которых является число. Полученный результат сохраните в переменную total.

const sumMe = {
    hello: 'there',
    you: 8,
    are: 7,
    almost: '10',
    done: '!',
};
let total = 0;

function checkIsPropNumber(obj) {
    for(let prop in obj) {
        if(typeof(obj[prop]) == 'number') count++;
    }
    return count;
}

total = checkIsPropNumber(sumMe);

// 5. Дан массив чисел numbers. Создайте новый массив evenNumbers, сохранив в него только четные значения из исходного массива.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];

function ckeckIsEven(arr1, arr2) {
    arr1.forEach(element => {
        if(!(element % 2)) arr2.push(element);
    });
}

ckeckIsEven(numbers, evenNumbers);

// 6. На основе массива numbers создайте новый массив, сохранив в него исходные значения массива numbers, умноженные на 10 (Прим. используйте метод map).
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multiplyByTen(arr) {
    return arr.map(element => element * 10);
}

const newNumbers = multiplyByTen(numbers);


// 7. Дан массив товаров goods. Используя метод map, создайте новый массив на основе goods, добавив каждому элементу, уникальный идентификатор id.
const goods = [
    { name: 'potato', price: 20 },
    { name: 'apple', price: 30 },
    { name: 'eggplant', price: 50 },
];

function addId(arr) {
    return arr.map(
        function(element) {
            if(!('id' in element)) element['id'] = 0;
            return element;
        }
    );
}

newGoods = addId(goods);

