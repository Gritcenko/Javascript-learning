const numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?',' ');

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};
const oneMovie = prompt('Один из просмотренных фильмов?', ' '),
    rating = prompt('На сколько оцените его?',' '),
    oneMovie2 = prompt('Один из просмотренных фильмов?', ' '),
    rating2 = prompt('На сколько оцените его?',' ');

personalMovieDB.movies[oneMovie] = rating;
personalMovieDB.movies[oneMovie2] = rating2;

console.log(personalMovieDB);