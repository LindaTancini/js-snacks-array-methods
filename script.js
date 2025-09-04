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

// Esercizio 21 - Hai questo array di libri, stampa solo i libri con più di 500 pagine.

const books = [
  { title: "Il signore degli anelli", pages: 1200 },
  { title: "Harry Potter", pages: 600 },
  { title: "Il piccolo principe", pages: 90 },
];
const es21 = books.filter((e) => e.pages > 500);
console.log(es21);

// Esercizio 22 - Hai questo array di film, crea un array con i titoli dei film che hanno un voto sopra 8.

const movies = [
  { title: "Inception", rating: 8.8 },
  { title: "Titanic", rating: 7.9 },
  { title: "The Room", rating: 3.7 },
];
const es22 = movies.filter((e) => e.rating > 8).map((e) => e.title);
console.log(es22);

// Esercizio 23 - Hai questo array di utenti, trova il primo utente inattivo.

const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true },
];
const es23 = users.find((e) => e.active === false);
console.log(es23);

// Esercizio 24 - Hai questo array di prodotti, calcola la somma totale dei prezzi.

const products2 = [
  { name: "Laptop", price: 1000 },
  { name: "Telefono", price: 500 },
  { name: "Tablet", price: 300 },
];
const es24 = products2.reduce((sum, e) => sum + e.price, 0);
console.log(es24);

// Esercizio 25 - Hai questo array di studenti, stampa i nomi degli studenti con voto >= 28.

const students2 = [
  { name: "Anna", grade: 28 },
  { name: "Luca", grade: 18 },
  { name: "Marco", grade: 30 },
];
const es25 = students2.filter((e) => e.grade >= 28).map((e) => e.name);
console.log(es25);

// Esercizio 26 - Hai questo array di squadre, ordina le squadre in base ai punti decrescenti.

const teams = [
  { name: "Juventus", points: 70 },
  { name: "Milan", points: 65 },
  { name: "Inter", points: 72 },
];
const es26 = teams.sort((a, b) => b.points - a.points);
console.log(es26);

// Esercizio 27 - Hai questo array di ordini, verifica se almeno un ordine supera i 300 euro.

const orders = [
  { id: 1, total: 250 },
  { id: 2, total: 400 },
  { id: 3, total: 100 },
];
const es27 = orders.some((e) => e.total > 300);
console.log(es27);

// Esercizio 28 - Hai questo array di playlist, crea un array con la durata di ogni canzone in minuti (arrotondando).

const playlist = [
  { song: "Song A", duration: 200 },
  { song: "Song B", duration: 180 },
  { song: "Song C", duration: 240 },
];
const es28 = playlist.map((e) => Math.round(e.duration / 60));
console.log(es28);

// Esercizio 29 - Hai questo array di dipendenti, trova il dipendente con lo stipendio più alto.

const employees = [
  { name: "Sara", salary: 2000 },
  { name: "Paolo", salary: 2500 },
  { name: "Marta", salary: 1800 },
];
const es29 = employees.reduce((max, e) => (e.salary > max.salary ? e : max));
console.log(es29);

// Esercizio 30 - Hai questo array di negozi, stampa i nomi dei negozi che sono aperti.

const stores = [
  { name: "Negozio A", open: true },
  { name: "Negozio B", open: false },
  { name: "Negozio C", open: true },
];

const es30 = stores.filter((e) => e.open).map((e) => e.name);
console.log(es30);
