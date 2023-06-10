// $ git config --global user.name "Veronika_Karankevitch"
// $ git config --global user.email "vervikar@gmail.com"

// напишите программу которая выводит в консоль сумму всех
// четных чисел в массиве

const numsArray = [1, 12, 34, 71, 14, 12, 33, 70, 82, 81, 9, 19, 90];

let sum = 0;

numsArray.forEach(nums => {
    if (nums % 2 == 0) {
        sum += nums;
    }
})
console.log(sum);

// // Напишите программу которая проанализирует данный массив с объектами
// // и добавит в новый массив только имена тех людей кому 18 и старше

const people = [
    {
        name: 'Jack',
        age: 15
    },
    {
        name: 'Sarah',
        age: 21
    },
    {
        name: 'Bob',
        age: 54
    },
    {
        name: 'Mary',
        age: 12
    },
    {
        name: 'Simon',
        age: 18
    },
    {
        name: 'Jonhatan',
        age: 17
    }
]
const adults = [];

people.forEach (people1 => {
    if ( people1.age >= 18) {
        adults.push(people1.name);
    }
})
    console.log(adults);

// // напишите программу которая проанализирует данный массив и выведет в консоль самую длинную строку

const strings = ['Star', 'Planet', 'Comet', 'Interstellar', 'Space'];
let longest = '';

strings.forEach (str => {
    if (str.length > longest.length) {
       longest = str;
    }
})
 console.log(longest);

// // напишите программу которая возьмёт из данного массива наименования книг которые вышли в этом году
// // и добавит их в новый массив
const books = [
    {
        author: 'Jeremy Brook',
        title: 'My childhood',
        release: 2023
    },
    {
        author: 'Samantha Jhones',
        title: 'Living with ten cats',
        release: 2020
    },
    {
        author: 'Bob Summers',
        title: 'Exploring far space',
        release: 2021
    },
    {
        author: 'Bill Brown',
        title: 'Insects in our garden',
        release: 2023
    },
    {
        author: 'Jessica Love',
        title: 'Programming for begginers',
        release: 2023
    }
];
const newBooks = [];

books.forEach (titl => {    
    if (titl.release === 2023) {
        newBooks.push (titl.title);
    }
})
console.log(newBooks);

// // Напишите программу которая проанализирует данный массив и найдёт в нем наибольшее число кратное трём

const numbers = [3, 15, 23, 56, 66, 71, 12, 90];

let biggest = 0;

numbers.forEach (nums => {
    if ( nums > biggest && nums % 3 === 0) {
            biggest = nums; 
        }
    })
console.log(biggest);


// // напишите программу которая найдёт самого старшего человека в данном массиве с объектами
// // и сохранит его в переменную oldestPerson
const people2 = [
    {
        name: 'Jack',
        age: 15
    },
    {
        name: 'Sarah',
        age: 21
    },
    {
        name: 'Bob',
        age: 54
    },
    {
        name: 'Mary',
        age: 12
    },
    {
        name: 'Simon',
        age: 18
    },
    {
        name: 'Jonhatan',
        age: 17
    }
];

let oldestPerson;

people2.forEach ( person => {
    if (!oldestPerson) {
        oldestPerson = person;
    }
    if (person.age > oldestPerson.age) {
        oldestPerson = person;
    }
})
console.log(oldestPerson);