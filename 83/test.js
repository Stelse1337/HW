console.log('1) Создайте объект с вашим описанием(имя, возраст и т.д.).');

const user = {
    name: 'Slava',
    age: 24,
    height: 188,
    married: false
}

console.log(user);

// ===================================================================

console.log('2) Создайте метод объекта, который в качестве аргумента будет принимать имя и возвращать строку ‘Hello “переданный аргумент”’.');

const metod = {
    sayHi(name) {
        return 'Hello ' + name;
    }
}

console.log(metod.sayHi('Slava'));

// ====================================================================

console.log('3) Создайте массив объектов с описанием пользователей(такой мы делали в уроке). Объявите отдельную переменную, в которой будет храниться количество простых пользователей, начальное значение будет - 0. Обойдите массив пользователей и если пользователь не является админом - прибавьте к ранее созданной переменной единицу. После окончания работы цикла выведите в консоль переменную с количеством простых пользователей.');

const array = [
    {
        name: 'slava',
        age: 24,
        isAdmin: true
    },
    {
        name: 'vlad',
        age: 26,
        isAdmin: false
    },
    {
        name: 'nikita',
        age: 28,
        isAdmin: true
    },
    {
        name: 'alex', 
        age: 30,
        isAdmin: false
    }
]

//кол-во простых пользователей
let noadmins = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i].isAdmin == false) {
        noadmins++;
    }
}

console.log(noadmins);