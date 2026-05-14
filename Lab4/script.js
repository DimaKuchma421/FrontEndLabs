'use strict';

const output = document.getElementById('output');

function print(message, value = '') {
    console.log(message, value);

    if (typeof value === 'object' && value !== null) {
        output.textContent += message + ' ' + JSON.stringify(value, null, 2) + '\n';
    } else {
        output.textContent += message + ' ' + value + '\n';
    }
}

print('Лабораторна робота 4. JavaScript');
print('Студент:', 'Дмитро Кучмамбетов, група 136');
print('----------------------------------------');

// Завдання 1. Змінні та типи даних
print('\nЗавдання 1. Змінні та типи даних');

const stringValue = 'JavaScript';
const numberValue = 42;
const booleanValue = true;
const nullValue = null;
let undefinedValue;
const symbolValue = Symbol('id');
const bigintValue = 123n;

const primitiveValues = [
    ['string', stringValue],
    ['number', numberValue],
    ['boolean', booleanValue],
    ['null', nullValue],
    ['undefined', undefinedValue],
    ['symbol', symbolValue],
    ['bigint', bigintValue]
];

primitiveValues.forEach(([name, value]) => {
    print(`${name}: ${String(value)}, typeof:`, typeof value);
});

print('\nПеретворення типів');
print('String(123):', String(123));
print('String(true):', String(true));
print('Number("123"):', Number('123'));
print('Number(""):', Number(''));
print('Number(true):', Number(true));
print('Number(false):', Number(false));
print('Number(null):', Number(null));
print('Number(undefined):', Number(undefined));

const booleanExamples = [0, '', null, undefined, NaN, '0', [], {}, 'false', 42];
booleanExamples.forEach((item) => {
    print(`Boolean(${String(item)}):`, Boolean(item));
});

const name = 'Дмитро Кучмамбетов';
const age = 19;
const university = 'коледж';
print(`Template literal: Студент: ${name}, вік: ${age}, навчальний заклад: ${university}`);

print('\nПорівняння == та ===');
print('5 == "5":', 5 == '5');
print('5 === "5":', 5 === '5');
print('0 == false:', 0 == false);
print('0 === false:', 0 === false);
print('null == undefined:', null == undefined);
print('null === undefined:', null === undefined);

// Завдання 2. Умови та логіка
print('\n----------------------------------------');
print('\nЗавдання 2. Умови та логіка');

function getGrade(score) {
    if (typeof score !== 'number' || Number.isNaN(score) || score < 0 || score > 100) {
        return 'невалідний бал';
    }

    if (score < 60) {
        return 'незадовільно';
    }

    if (score < 75) {
        return 'задовільно';
    }

    if (score < 90) {
        return 'добре';
    }

    return 'відмінно';
}

function getSeasonUA(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            return 'зима';
        case 3:
        case 4:
        case 5:
            return 'весна';
        case 6:
        case 7:
        case 8:
            return 'літо';
        case 9:
        case 10:
        case 11:
            return 'осінь';
        default:
            return 'невірний номер місяця';
    }
}

print('getGrade(55):', getGrade(55));
print('getGrade(70):', getGrade(70));
print('getGrade(82):', getGrade(82));
print('getGrade(95):', getGrade(95));
print('getGrade(120):', getGrade(120));
print('getGrade("90"):', getGrade('90'));

print('getSeasonUA(1):', getSeasonUA(1));
print('getSeasonUA(4):', getSeasonUA(4));
print('getSeasonUA(7):', getSeasonUA(7));
print('getSeasonUA(10):', getSeasonUA(10));
print('getSeasonUA(14):', getSeasonUA(14));

const studentAge = 19;
const status = studentAge >= 18 ? 'повнолітній' : 'неповнолітній';
print('Тернарний оператор:', status);

// Завдання 3. Масиви
print('\n----------------------------------------');
print('\nЗавдання 3. Масиви');

let students = [
    { name: 'Дмитро Кучмамбетов', grade: 81, courses: ['JavaScript', 'HTML', 'CSS'] },
    { name: 'Олена Коваленко', grade: 92, courses: ['JavaScript', 'React'] },
    { name: 'Іван Петренко', grade: 55, courses: ['HTML', 'CSS'] },
    { name: 'Марія Бондар', grade: 74, courses: ['Python', 'HTML'] },
    { name: 'Артем Шевченко', grade: 88, courses: ['JavaScript', 'Git'] },
    { name: 'Наталія Мельник', grade: 96, courses: ['JavaScript', 'Node.js'] }
];

print('Початковий масив студентів:', students);

students.push({ name: 'Сергій Ткаченко', grade: 67, courses: ['CSS', 'Git'] });
print('Після push:', students);

const deletedLastStudent = students.pop();
print('Видалений останній студент:', deletedLastStudent);

const deletedMiddleStudent = students.splice(2, 1);
print('Видалений студент із середини:', deletedMiddleStudent);

students.splice(2, 0, { name: 'Юлія Романенко', grade: 90, courses: ['JavaScript', 'Vue'] });
print('Після додавання студента на позицію 2:', students);

const excellentStudent = students.find((student) => student.grade > 90);
print('Перший студент з оцінкою більше 90:', excellentStudent);

const jsStudents = students.filter((student) => student.courses.includes('JavaScript'));
print('Студенти, які вивчають JavaScript:', jsStudents);

const averageGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;
print('Середня оцінка студентів:', averageGrade.toFixed(2));

// Завдання 4. Функції
print('\n----------------------------------------');
print('\nЗавдання 4. Функції');

function rectangleAreaDeclaration(width, height) {
    return width * height;
}

const rectangleAreaExpression = function (width, height) {
    return width * height;
};

const rectangleAreaArrow = (width, height) => width * height;

print('Function Declaration 5x4:', rectangleAreaDeclaration(5, 4));
print('Function Expression 6x3:', rectangleAreaExpression(6, 3));
print('Arrow Function 7x2:', rectangleAreaArrow(7, 2));

function createCounter() {
    let value = 0;

    return {
        increment() {
            value += 1;
            return value;
        },
        decrement() {
            value -= 1;
            return value;
        },
        getValue() {
            return value;
        }
    };
}

const counter = createCounter();
print('counter.increment():', counter.increment());
print('counter.increment():', counter.increment());
print('counter.decrement():', counter.decrement());
print('counter.getValue():', counter.getValue());

function createUser(userName, role = 'student', isActive = true) {
    return {
        userName,
        role,
        isActive
    };
}

print('createUser("Дмитро"):', createUser('Дмитро'));
print('createUser("Олена", "admin", false):', createUser('Олена', 'admin', false));

const sum = (...numbers) => numbers.reduce((acc, number) => acc + number, 0);
print('sum(1, 2, 3):', sum(1, 2, 3));
print('sum(10, 20):', sum(10, 20));

function printStudentInfo({ name, grade, courses }) {
    print(`${name} має оцінку`, grade);
    print('Курси:', courses.join(', '));
}

printStudentInfo(students[0]);

// Завдання 5. Обʼєкти
print('\n----------------------------------------');
print('\nЗавдання 5. Обʼєкти');

const studentProfile = {
    firstName: 'Дмитро',
    lastName: 'Кучмамбетов',
    age: 19,
    university: 'коледж',
    grades: {
        math: 82,
        physics: 76,
        programming: 91,
        css: 88
    },
    isActive: true,
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    getAverageGrade() {
        const grades = Object.values(this.grades);
        return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
    }
};

print('Повне імʼя:', studentProfile.getFullName());
print('Середня оцінка:', studentProfile.getAverageGrade().toFixed(2));
print('Dot notation age:', studentProfile.age);
print('Bracket notation university:', studentProfile['university']);

const dynamicKey = 'isActive';
print('Динамічний ключ:', studentProfile[dynamicKey]);

print('Object.keys:', Object.keys(studentProfile));
print('Object.values:', Object.values(studentProfile));
print('Object.entries:', Object.entries(studentProfile));

const studentProfileCopy = {
    ...studentProfile,
    age: 20
};

print('Оригінальний вік:', studentProfile.age);
print('Вік у копії:', studentProfileCopy.age);

const labScore = studentProfile.grades?.lab;
const mentorName = studentProfile.mentor?.name ?? 'Не призначено';
print('Optional chaining labScore:', labScore);
print('Optional chaining mentorName:', mentorName);

// Завдання 6. Ланцюжки методів масивів
print('\n----------------------------------------');
print('\nЗавдання 6. Ланцюжки методів масивів');

const products = [
    { name: 'Ноутбук', price: 25000, category: 'electronics', inStock: true, quantity: 5 },
    { name: 'Миша', price: 600, category: 'electronics', inStock: true, quantity: 15 },
    { name: 'Клавіатура', price: 1200, category: 'electronics', inStock: false, quantity: 8 },
    { name: 'Стіл', price: 4500, category: 'furniture', inStock: true, quantity: 3 },
    { name: 'Крісло', price: 3200, category: 'furniture', inStock: true, quantity: 4 },
    { name: 'Зошит', price: 40, category: 'stationery', inStock: true, quantity: 50 },
    { name: 'Ручка', price: 20, category: 'stationery', inStock: false, quantity: 100 },
    { name: 'Монітор', price: 7000, category: 'electronics', inStock: true, quantity: 6 }
];

const totalStockValue = products
    .filter((product) => product.inStock)
    .map((product) => product.price * product.quantity)
    .reduce((sum, value) => sum + value, 0);

print('Загальна вартість товарів у наявності:', totalStockValue);

const electronicsNamesByPrice = products
    .filter((product) => product.category === 'electronics')
    .sort((a, b) => a.price - b.price)
    .map((product) => product.name);

print('Electronics за ціною:', electronicsNamesByPrice);

const productsByCategory = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] ?? 0) + 1;
    return acc;
}, {});

print('Кількість товарів за категоріями:', productsByCategory);

const studentsByGrade = [...students].sort((a, b) => b.grade - a.grade);
print('Студенти за оцінкою:', studentsByGrade);

const studentsByName = [...students].sort((a, b) => a.name.localeCompare(b.name, 'uk'));
print('Студенти за імʼям:', studentsByName);

// Завдання 7. Рядки
print('\n----------------------------------------');
print('\nЗавдання 7. Рядки');

function capitalize(str) {
    if (str.length === 0) {
        return '';
    }

    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function countWords(str) {
    const trimmed = str.trim();

    if (trimmed === '') {
        return 0;
    }

    return trimmed.split(' ').filter((word) => word !== '').length;
}

function truncate(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    }

    return str.slice(0, maxLength) + '...';
}

function isValidEmail(email) {
    if (!email.includes('@')) {
        return false;
    }

    const firstAt = email.indexOf('@');
    const lastAt = email.lastIndexOf('@');

    if (firstAt !== lastAt || firstAt === 0) {
        return false;
    }

    const dotAfterAt = email.indexOf('.', firstAt + 1);
    const lastDot = email.lastIndexOf('.');

    if (dotAfterAt === -1 || dotAfterAt === firstAt + 1) {
        return false;
    }

    return email.length - lastDot - 1 >= 2;
}

print('capitalize("javaScript"):', capitalize('javaScript'));
print('capitalize("hello world"):', capitalize('hello world'));
print('capitalize(""):', capitalize(''));

print('countWords("JavaScript це круто"):', countWords('JavaScript це круто'));
print('countWords(" пробіли між словами "):', countWords(' пробіли між словами '));
print('countWords("   "):', countWords('   '));

print('truncate("Це довгий текст для прикладу", 15):', truncate('Це довгий текст для прикладу', 15));
print('truncate("Короткий", 20):', truncate('Короткий', 20));

print('isValidEmail("user@example.com"):', isValidEmail('user@example.com'));
print('isValidEmail("invalid-email"):', isValidEmail('invalid-email'));
print('isValidEmail("@example.com"):', isValidEmail('@example.com'));
print('isValidEmail("user@.com"):', isValidEmail('user@.com'));
print('isValidEmail("user@example.c"):', isValidEmail('user@example.c'));
print('isValidEmail("user@@example.com"):', isValidEmail('user@@example.com'));

print('\n----------------------------------------');
print('Усі завдання виконано. Також перевірте консоль браузера.');
