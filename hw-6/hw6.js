// 1.Конкатенація рядків: Складіть повідомлення про ваш улюблений фільм, його жанр і рік виходу, використовуючи конкатенацію через оператор + та шаблонні рядки.
var film = "Інфоголік,";
var genre = "Комедія,";
var year = 2024;
const result1 = film + " " + genre + " " + year;
console.log(result);

var film = "Інфоголік";
var genre = "Комедія";
var year = 2024;
const result2 = `${film}`.concat(`, ${genre}, ${year}`);
console.log(result2);

var film = "Інфоголік";
var genre = "Комедія";
var year = 2024;
const result = `${film} ${genre} ${year}`;
console.log(result);

// 2.Робота з екрануванням символів: Сформуйте рядок з вашим улюбленим висловом, використовуючи різні типи кавичок і включаючи в нього символи нового рядка та табуляції.
var expression =
   '"Тож усе, що хочете, аби робили вам люди,\n\tте робіть їм і ви,\n\t\tбо в цьому вся суть Закону і Пророків."\n\n\t\t\t\t\t\t\t\t';
var verse = "(Матвія 7:12)";
const result = `${expression} ${verse}`;
console.log(result);
document.body.textContent = result;

// 3.Пошук у рядку: Визначте, на якій позиції знаходиться слово "Добрий" та "худий" у вірші, і перевірте, чи зустрічається слово "Добрий" на початку чи в кінці рядка.
let proverb = "Добрий Іван — і людям, і нам; худий Іван — ні людям, ні нам.";
console.log(proverb);
console.log(proverb.indexOf("Добрий")); // 0
console.log(proverb.indexOf("худий")); // 30
console.log(proverb.lastIndexOf("Добрий")); // 0

// 4.Зміна регістру та заміна частини рядка: Перетворіть всі символи рядка на малі літери, потім замініть слово "Сонце" на "Місяць".
let phrase = "Сонце світить яскраво";
let result = phrase.toLowerCase()
console.log(result); // cонце світить яскраво
console.log(phrase);

let phrase2 = "Сонце світить яскраво";
let newPhrase = phrase2.replace("Сонце", "Місяць");
console.log(newPhrase);  // Місяць світить яскраво

