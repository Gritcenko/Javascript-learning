"use strict";

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?',' ');

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('Один из просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?','');
        
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
     
       
}

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert ("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    alert ("Вы классический зритель");
} else {
    alert ("Произошла ошибка");
}

console.log(personalMovieDB);