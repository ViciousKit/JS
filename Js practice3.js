// 1. Напишите функцию addTen, которая принимает число, прибавляет к нему 10 и возвращает полученный результат

function addThen(inputNumb) {
    return input + 10;
}

// 2. Напишите функцию isOdd, которая принимает число и проверяет его на чет/нечет (возвращеает true для нечетного числа, false для четного)

function isOdd (inputNumb) {
    return inputNumb % 2 !== 0;
}

// 3. Напишите функцию getSquare для нахождения площади прямоугольника со сторонами width и height

function gerSquare(width, height) {
    return width * height;
}

// 4. Напишите функцию kmToMiles, которая принимает значение в километрах, а возвращает преобразованное значение в милях

function kmToMiles(kms) {
    return kms * 0,62;
}

// 5. Напишите функцию sayHello, которая принимает имя и возврщает приветствие с этим именем. Например, "Пример, Мэри!"

function sayHello(userName) {
    return `Hello, ${userName}`;
}

// 6. Напишите функцию sign, которая принимает аргумент t и возвращает 1, если число t - положительное, и -1, если t - отрицательное. В противном случае - 0

function sign(t) {
    return t > 0 ? 1 : t < 0 ? -1 : 0;
}

// 7. Написать функцию rand(), которая возвращает случайное целое число в указанном диапазоне

function rand(min, max) {
    let randomise = min + Math.random() * (max + 1 - min);
    return Math.floor(randomise);
}

// 8. Напишите функцию, которая находит кол-во цифр в числе.

function integerCount(number) {
    return number.toString().length;
}


// 1. Создайте функцию multiply, которая принимает два числа, перемножает их и возвращает результат
// для каждого параметра задайте значение по умолчанию 1

function multiply(numb1 = 1, numb2 = 2) {
    return numb1 * numb2;
}

// 2. Напишите функцию createGreeting, которая возвращает новую функцию, результатом вызова которой будет вывод в консоль сообщения "Hello from closure"

function createGreeting() {
    function sendMessage() {
        alert('Hello from closure');
    }
    return sendMessage();
}

// 3. Напишите функцию createFunction, которая принимает строку и возвращает новую функцию, результат вызова которой является вывод в консоль полученной ранее строки.

function createFunction(string) {
    function sendMessage (text) {
        console.log(text);
    }
    return sendMessage(string);
}
// 4. Напишите функцию createCountdown, которая принимает число и возвращает новую функцию. При вызове новой функции каждый раз отнимается 1 от изначально полученного числа и результат печатается в консоль.

