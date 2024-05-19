// Завдання 1: Цикл while
// Напишіть програму, яка використовує цикл while для виведення чисел від 1 до 10.

let i = 1;
while (i <= 10) {
  if (i == 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}

// Завдання 2: Цикл do...while
// Напишіть програму, яка використовує цикл do...while для виведення чисел від 10 до 1.

let i = 10;
do {
  console.log(i);
  i--;
} while (i);

// Завдання 3: Цикл for
// Напишіть програму, яка використовує цикл for для виведення парних чисел від 2 до 20.

for (let i = 2; i <= 20; i++) {
  if (i % 2 == 1) continue;
  console.log(i);
}

for (let i = 2; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Завдання 4: Вкладений цикл
// Напишіть програму, яка використовує вкладений цикли for для виведення таблиці множення від 1 до 5.

for (let i = 1; i <= 5; i++) {
  let j = 1;
  while (j <= 5) {
    console.log(i + " * " + j + " = " + i * j);
    j++;
  }
}

// Завдання 5: Цикл з використанням continue
// Напишіть програму, яка використовує цикл for для виведення чисел від 1 до 10, але пропускає числа, що діляться на 3 без остачі.

for (let i = 1; i <= 10; i++) {
  if (i % 3 == 0) continue;
  console.log(i);
}

// Завдання 6: Цикл з використанням break
// Напишіть програму, яка використовує цикл while для виведення чисел від 1 до 10, але зупиняється, коли число дорівнює 7.

let i = 1;
while (i < 11) {
  if (i == 8) {
    i++;
    break;
  }
  console.log(i);
  i++;
}
