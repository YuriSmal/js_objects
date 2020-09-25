// 1. Створити обєкт який описує тварину (назву, вагу, вік, середню швидкість), і наступні функції для роботи з ним:
// Функція яка виведе всю інформацію про тварину.
// Функція яка виведе за скільки тварина зможе подолати 1000 км. (врахуйте що тварина може рухатись не більше 12 годин у день). 
// Функція яка зможе змінити назву тварини на більш детальну. 

// let animal = {
//     name: "dog",
//     weight: 20,
//     age: 5,
//     speed: 25
// }

// function getInfo() {
//     console.log(animal);
// }

// getInfo();

// function calculateTime(distance) {
//     let time = (distance / animal.speed) / 12;  
//     console.log(`${animal.name} will pass ${distance}km in ${time.toFixed(1)} days`);
// }

// calculateTime(1000);

// function changeName() {
//     animal.name = prompt('Введіть нову назву тварини');
//     console.log(`Нова назва тварини - ${animal.name}`);
//     console.log(animal);
// }

// changeName();


//  2. Створіть обєкт який має у собі 2 довжини сторін фігури.
//  Додайте методи які будуть робити наступне:
//  рахувати площу фігури, периметр фігури, зроблять фігуру 3-д, зададуть назву фігури, переведуть значення з сантиметрів у метри.

// let figure = {
//     width: 15,
//     length: 10,
//     square: function() {
//         return this.width * this.length; 
//     },
//     perimeter: function() {
//         return this.width * 2 + this.length * 2;
//     },
// };

// function setFigureName() {
//     figure.name = prompt('Задайте назву фігури')
// };

// function toMetres(cm) {
//     cm = 0.01;
//     figure.width = figure.width * cm;
//     figure.length = figure.lengtht * cm;
//     (console.log(figure));
// }

// function addHeight() {
//     figure.height = prompt('Задайте висоту фігури')
// }

// console.log(`Площа фігури = ${figure.square()} кв. см.`);
// console.log(figure);

// console.log(`Периметр фігури = ${figure.perimeter()} см.`);
// console.log(figure);

// setFigureName();
// toMetres();
// addHeight();

// 3. Створимо аналог списка покупок (мінімум 5 покупок з всіма заданими пропертями. )
// let bought = [];

// let buyList = {

//     tomato: {
//         count: 5,
//         price: 50,
//         buy: false,
//         outOfstore: true
//     },
//     apple: {
//         count: 3,
//         price: 40,
//         buy: true,
//         outOfstore: true
//     },
//     banana: {
//         count: 7,
//         price: 60,
//         buy: false,
//         outOfstore: true
//     },
//     avocado: {
//         count: 2,
//         price: 100,
//         buy: true,
//         outOfstore: false
//     },
//     beer: {
//         count: 15,
//         price: 85,
//         buy: true,
//         outOfstore: false
//     },
//     productsInStock: function() {
//         let inStock = [];
//         let str = '';
//         for (let key in buyList) {
//             if (buyList[key].outOfstore === false) {
//                 str += key + ',';
//                 inStock = str.split(',');
//                 inStock.pop();
//             }
//         }
//         return inStock;
//     },
//     productsOutOfStock: function() {
//         let outOfStock = [];
//         let str = '';
//         for (let key in buyList) {
//             if (buyList[key].outOfstore === true) {
//                 str += key + ',';
//                 outOfStock = str.split(',');
//                 outOfStock.pop();
//             }
//         }
//         return outOfStock;
//     },
//     productsBought: function() {
        
//         let str = '';
//         for (let key in buyList) {
//             if (buyList[key].buy === true && buyList[key].outOfstore === false) {
//                 str += key +',';
//                 bought = str.split(',');
//             }
//         }
//         return bought;
//     },
//     productsToBuy: function() {
//         let toBuy = [];
//         let str = "";
//         for (let key in buyList) {
//             if (buyList[key].buy === false) {
//                 let question = confirm(`Бажаєте докупити ${key}?`);
//                 if (question) {
//                     str += key + ",";
//                     toBuy = str.split(',');
//                     toBuy.pop();
//                 }
//             }
//         }
//         return toBuy;
//     },
//     totalPrice: function(bought) {
//         let price = 0;
//         let sum = 0;
//         for (let i = 0; i < bought.length; i++) {
//             for (let key in buyList) {
//                 if (key === bought[i]) {
//                     price = buyList[key].count * buyList[key].price;
//                     sum += price;
//                 }
                
//             }
//         }
//         return sum;
//     },
//     changeQuantity: function() {
//         for (let key in buyList) {
//             if (typeof buyList[key] !== "function") /*не проходить перевірка на функцію, не розумію чому*/ {
//                 let question = confirm(`Змінити кількість ${key}?`);
//                 if (question) {
//                     let newQuantity = +prompt('Введіть необхідну кількість');
//                     if (newQuantity >= 0) {
//                         buyList[key].count = newQuantity;
//                     } else {
//                         alert('Це що за кількість така?) Краще спробуй ще раз');
//                     }
                    
//                 }
//             }
//         }
//         return buyList;
//     }


// };

// console.log(buyList)
// console.log(buyList.productsInStock(), 'продукти в наявності');
// console.log(buyList.productsOutOfStock(), 'продукти, яких немає в наявності');
// console.log(buyList.productsBought(), 'куплені продукти');
// console.log(buyList.totalPrice(bought), 'загальна вартість продуктів');
// console.log(buyList.productsToBuy(), 'докупили');
// console.log(buyList.changeQuantity(), 'змінили кількість');

// 4. Задана колекція [{name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin"}, {}, {},{}].
// Вивести всіх адмінів. Вивести середній вік усіх працівників. Вивести тільки унікальні хоббі працівників.

let employees = [
    {
        name: "Yura", 
		age: 55, 
		hobby: ["films", "games", "hiking"], 
		type: "Admin"
    },
    {
        name: "Vitaliy", 
		age: 22, 
		hobby: ["anime", "politics", "games"], 
		type: "Admin"
    },
    {
        name: "Diana", 
		age: 22, 
		hobby: ["coffee", "music", "films"], 
		type: "User"
    },
    {
        name: "Victor", 
		age: 29, 
		hobby: ["football", "food", "games"], 
		type: "User"
    }
];


