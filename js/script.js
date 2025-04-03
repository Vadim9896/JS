"use strict"

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
//     }
// }

// start();

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// }

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
//             b = prompt('На сколько оцените его?', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();



// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман"); 2
//     } else {
//         console.log("Произошла ошибка");
//     }
// }

// detectPersonalLevel();

// function showMyDB() {
//     if (personalMovieDB.privat === false) {
//         console.log(personalMovieDB)
//     }
// }
// et
// showMyDB();

// function writeYourGenres() {


//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`, ''));
//     }

// }

// writeYourGenres();


const arr = [1, 2, 3, 6, 8];

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// });

const str = prompt("", "");
const products = str.split(", ");
console.log(products);