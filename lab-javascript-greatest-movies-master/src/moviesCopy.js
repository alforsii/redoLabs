// Iteration 1: All directors? - Get the array of all directors.
// const testArr = [
//     {
//       title: 'Paths of Glory',
//       year: 1957,
//       director: 'Stanley Kubrick',
//       duration: '1h 28min',
//       genre: ['Drama', 'War'],
//       rate: 8.4
//     },
//     {
//       title: 'Django Unchained',
//       year: 2012,
//       director: 'Quentin Tarantino',
//       duration: '2h 45min',
//       genre: ['Drama', 'Western'],
//       rate: 8.4
//     }
//   ];
const getAllDirectors = (movies) => {
    return { movies: [...movies].map(movie => movie.director)}
} 
// const movies = getAllDirectors(movies)
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (arr) => {
    return arr.filter(
        movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    ).length
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (arr) => {
    if(arr.length === 0 ) {
        return 0
    }

    const len = arr.length
    const rates = [...arr].map(movie => movie.rate).filter(rate => rate)

    const total = rates.reduce((acc, val) => acc + val) / len

    return Number(total.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (arr) => {
    const rates = [...arr].filter(movie => movie.genre.includes('Drama')).map(
        movie => movie.rate
    )

    const total = rates.reduce((acc, val) => acc + val, 0) / rates.length || 0

    return Number(total.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (arr) => {
    return [...arr].sort((a,b) => a.year > b.year ? 1 : -1)
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (arr) => {
    const sortedAlphabetic =  [...arr].sort((a,b) => a.title > b.title ? 1 : -1).map(
        movie => movie.title
    )
    return sortedAlphabetic.length > 20 ? sortedAlphabetic.slice(0,20) : sortedAlphabetic 
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (arr) => {

    return JSON.parse(JSON.stringify(arr)).map(movie => { //JSON.parse(JSON.stringify(o)) - deep cloning
        const duration = movie.duration.toString().split(' ')
        if(duration.length > 1) {
            movie.duration = parseFloat(duration[0])*60 + parseFloat(duration[1])
        } else {
            if(duration[0].includes('h')) {
                movie.duration = parseFloat(duration[0])*60
            } else {
                movie.duration = parseFloat(duration[0])
            }
        }

        return movie
    })
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
const bestYearAvg = () => {}