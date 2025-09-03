// Esercizio 1 - Hai questo array di numeri, crea un nuovo array che contenga solo i numeri pari.
const numbers = [3, 7, 12, 5, 20, 8];
const es1 = numbers.filter((e) => e % 2 == 0);
console.log(es1);

// Esercizio 2 Hai questo array di nomi, stampa solo i nomi che iniziano con la lettera "M".

const names = ["Anna", "Luca", "Marco", "Giulia", "Paolo"];
const es2 = names.filter((e) => e.startsWith("M"));
console.log(es2);

// Esercizio 3 - Hai questo array di parole, crea un nuovo array con la lunghezza di ogni parola.

const words = ["sole", "luna", "cielo", "mare", "stella"];
const es3 = words.map((e) => e.length);
console.log(es3);

// Esercizio 4 - Hai questo array di prezzi, calcola la somma totale dei prezzi.

const prices = [10, 20, 5, 8, 30];
const es4 = prices.reduce((sum, e) => sum + e, 0);
console.log(es4);

// Esercizio 5 - Hai questo array di animali, stampa solo gli animali con più di 5 lettere.

const animals = ["gatto", "cane", "leone", "tigre", "cavallo"];
const es5 = animals.filter((e) => e.length > 5);
console.log(es5);

// Esercizio 6 - Hai questo array di studenti, stampa solo gli studenti maggiorenni.

const students = [
  { name: "Anna", age: 20 },
  { name: "Luca", age: 17 },
  { name: "Marco", age: 22 },
  { name: "Giulia", age: 19 },
];

const es6 = students.filter((e) => e.age >= 18);
console.log(es6);

// Esercizio  7 - Hai questo array di prodotti, stampa solo i prodotti che costano più di 20.

const products = [
  { name: "Maglietta", price: 15 },
  { name: "Pantaloni", price: 30 },
  { name: "Cappello", price: 8 },
  { name: "Scarpe", price: 50 },
];

const es7 = products.filter((e) => e.price > 20);
console.log(es7);

// Esercizio 8 - Hai questo array di città, crea un array con i nomi delle città che hanno più di 1 milione di abitanti.

const cities = [
  { name: "Roma", population: 2873000 },
  { name: "Milano", population: 1378000 },
  { name: "Torino", population: 870000 },
  { name: "Firenze", population: 380000 },
];

const es8 = cities.filter((e) => e.population > 1000000).map((e) => e.name);
console.log(es8);

// Esercizio 9 - ai questo array di numeri, crea un nuovo array con la radice quadrata di ogni numero.

const numbers2 = [4, 9, 16, 25, 36];
const es9 = numbers2.map((e) => Math.sqrt(e));
console.log(es9);

// Esercizio 10 - Hai questo array di colori, stampa i colori che contengono la lettera "o".

const colors = ["rosso", "blu", "verde", "giallo", "viola"];
const es10 = colors.filter((e) => e.includes("o"));
console.log(es10);

// Esercizio 11 - Hai questo array di numeri, crea un nuovo array con i numeri moltiplicati per 2. (map)

const numbers3 = [2, 5, 7, 9, 12, 15];
const es11 = numbers3.map((e) => e * 2);
console.log(es11);

// Esercizio 12 - Hai questo array di età, filtra solo le persone maggiorenni. (filter)

const ages = [12, 18, 25, 30, 15, 40];
const es12 = ages.filter((e) => e >= 18);
console.log(es12);

// Esercizio 13 - Hai questo array di stringhe, trova la prima parola che ha più di 4 lettere. (find)

const fruits = ["mela", "banana", "pera", "kiwi"];
const es13 = fruits.find((e) => e.length > 4);
console.log(es13);

// Esercizio 14 - Hai questo array di numeri, verifica se tutti i punteggi sono almeno 40. (every)

const scores = [50, 80, 95, 40, 70];
const es14 = scores.every((e) => e >= 40);
console.log(es14);

// Esercizio 15 - Hai questo array di voti, controlla se c’è almeno un voto maggiore di 9. (some)

const votes = [3, 6, 8, 4, 10];
const es15 = votes.some((e) => e > 9);
console.log(es15);

// Esercizio 16 - Hai questo array di parole, ordinale in base alla lunghezza crescente. (sort)

const words2 = ["ciao", "javascript", "web", "react"];
const es16 = words2.sort((a, b) => a.length - b.length);
console.log(es16);

// Esercizio 17 - ai questo array di numeri, calcola la somma totale. (reduce)

const values = [1, 2, 3, 4, 5];
const es17 = values.reduce((sum, e) => sum + e, 0);
console.log(es17);

// Esercizio 18 - ai questo array di colori, stampa ogni colore con il testo: "Colore: ". (forEach)

const colors2 = ["rosso", "verde", "blu"];
colors2.forEach((e) => console.log("Colore:" + e));

// Esercizio 19 -Hai questo array di parole, crea un array di parole maiuscole. (map)

const words3 = ["sole", "luna", "cielo", "mare"];
const es19 = words3.map((e) => e.toUpperCase());
console.log(es19);

// Esercizio 20 - Hai questo array di numeri, verifica se l’array contiene il numero 15. (includes)

const numbers4 = [5, 10, 15, 20];
const es20 = numbers4.includes(15);
console.log(es20);
