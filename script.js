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
