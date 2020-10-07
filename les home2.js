/* Условия */
// 1. Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
//   1, если значение больше нуля,
//   -1, если значение меньше нуля,
//   0, если значение равно нулю.
// Предполагается, что пользователь вводит только числа.

let comparedNumber = +prompt('Введите любое число');
if(comparedNumber > 0) alert('1');
else if(comparedNumber < 0) alert('-1');
else alert('0');


// 2. Перепишите if-конструкцию с использованием условного оператора '?':
// const a = 1;
// const b = 2;
// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

const a = 1;
const b = 2;
let result = a + b < 4 ? 'Мало' : 'Много';


// 2.1 Использование метода str.includes(). Задать загадку через alert, проверить введенный ответ на вхождение правильного ответа (предварительно переведя ответ в нижний регистр). В зависимости от правильного ответа, выдать alert'ом - правильно или нет.

let userAnswer;
const correctAnswer = 'лампочка';
for(;;) {
    userAnswer = prompt('Висит груша, нельзя скушать. Что это?');
    if(userAnswer === null) break;
    if(userAnswer.toLowerCase().includes(correctAnswer)) {
        alert('Правильный ответ!');
        break;
    }
    else alert('Неправильный ответ!');
}
   


// 3. Перепишите код ниже с использованием одной конструкции switch:
// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

const number = +prompt('Введите число между 0 и 3');
switch(number) {
    case 0:
        alert('Вы ввели 0');
        break;
    case 1:
        alert('Вы ввели 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели 2, а может 3');
        break;
    default:
        alert('Неизвестное значение');
        break;

}




/* Циклы */
// 1. При помощи цикла while выведите чётные числа от 2 до 10. (либо до запрошеного у пользователя числа)
let startCount = 2;
let finishCount;
for(;;) {
    finishCount = prompt('Enter a number > 2');
    if(finishCount === null) break;
    if(finishCount > startCount) break;  
}
while(startCount <= finishCount) {
    if(!(startCount % 2)) console.log(startCount);
    startCount++;
}

// 2. Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

for(;;) {
    let userNumber = +prompt('Введите число > 100');
    if(userNumber > 100) break; 
}

// 3. Выведите квадраты всех чисел от 1 до 20 в цикле for
// for(let i = 1;i <= 20;i++) {
//     console.log(i**2);
// }
// 4. Выведите в консоли "ёлку":
// *
// **
// ***
// ****
// *****
// ******

for(let i = 0, tree = '';i < 5;i++) {
    tree += "*";
    console.log(tree);
}

// 5. Создайте бесконечный цикл с проверкой правильности ввода числа пользователем. Подсчитать кол-во некорректных вводов пользователем.
for(let i = 0, number;;i++) {
    if(number !== undefined) number = +prompt(`Введите любое число. Количество некорректных вводов: ${i}`);
    else number = +prompt('Введите любое число');
    if(!isNaN(number)) break;
}
 
// 6. Запросить у пользователя строку и вывести ее в консоль побуквенно на разных строчках, исключая пробелы.
let requestString = prompt('Введите любую строку');
let arr = requestString.trim().split('');
for(let i = 0; i < arr.length;i++) {
    console.log(arr[i]);
}
