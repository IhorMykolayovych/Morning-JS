// 1.Конкатенація рядків:
var film = "Інфоголік, ";
var genre = "Комедія, ";
var year = 2024;
const result = film + genre + year;
console.log(result);

var film = "Інфоголік, ";
var genre = "Комедія, ";
var year = 2024;
const result = film.concat(genre, year);
console.log(result);

var film = "Інфоголік";
var genre = "Комедія";
var year = 2024;
const result = `${film} ${genre} ${year}`;
console.log(result);

// 2.Робота з екрануванням символів:
var expression =
   '"Тож усе, що хочете, аби робили вам люди, \n\tте робіть їм і ви, \n\t\tбо в цьому вся суть Закону і Пророків."\n\n\t\t\t\t\t\t\t\t';
var verse = "(Матвія 7:12)";
const result = `${expression} ${verse}`;
console.log(result);
document.body.textContent = result;

// 3.Пошук у рядку:
let proverb = "Добрий Іван — і людям, і нам; худий Іван — ні людям, ні нам.";
console.log(proverb);
console.log(proverb.indexOf("Добрий")); // 0
console.log(proverb.indexOf("худий")); // 30
console.log(proverb.lastIndexOf("Добрий")); // 0

// 4.Зміна регістру та заміна частини рядка:
let phrase = "Сонце світить яскраво";
let result = phrase.toLocaleLowerCase()
console.log(result); // cонце світить яскраво
console.log(phrase);

let phrase = "Сонце світить яскраво";
let newPhrase = phrase.replace("Сонце", "Місяць");
console.log(newPhrase);  // Місяць світить яскраво
