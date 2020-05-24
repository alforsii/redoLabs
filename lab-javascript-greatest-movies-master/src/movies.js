// Iteration 1: All directors? - Get the array of all directors.
//if it's one line code, no need for curly braces and no need for 'return'
 const getAllDirectors = moviesArr => moviesArr.map(movie => movie.director)

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = moviesArr => {
    return moviesArr.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = moviesArr => {
    const avgRates = moviesArr.filter(movie => movie.rate).reduce((acc, val) => acc + val.rate, 0 ) / moviesArr.length
    return Number(avgRates.toFixed(2)) || 0
}
// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = moviesArr => {
    const dramaMovies = moviesArr.filter(movie => movie.genre.includes('Drama'))
    return ratesAverage(dramaMovies)
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = moviesArr => {
    return [...moviesArr].sort((a,b) => a.year > b.year ? 1 : -1)
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = moviesArr => {
    return [...moviesArr].map(movie => movie.title).sort((a,b) => a > b ? 1:-1).slice(0,20)
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
const bestYearAvg = moviesArr => {
    if (!moviesArr.length) return null;
    const sortByYear = {}
    moviesArr.forEach(movie => {
        if(!sortByYear[movie.year]) {
            sortByYear[movie.year] = [movie]
        } else {
            sortByYear[movie.year].push(movie)
        }
    })
    let bestAvgRate = 0
    let bestYear
    for(let year in sortByYear) {
        if(ratesAverage(sortByYear[year]) > bestAvgRate) {
            bestAvgRate = ratesAverage(sortByYear[year])
            bestYear = year
        }
    }

    return `The best year was ${bestYear} with an average rate of ${bestAvgRate}`;
}