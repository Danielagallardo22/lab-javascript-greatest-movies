// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    return moviesArray.map((movie) => {
        return movie.director
    })
}



// bonus 1

function getUniqueDirectors(moviesArray) {

    const directors = moviesArray.map((movie) => {
        return movie.director
    })
    const filteredDirectors = []

    directors.forEach((director) => {

        if (filteredDirectors.indexOf(director) < 0) {
            filteredDirectors.push(director)
        }

    })
    return filteredDirectors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    let newArr = moviesArray.filter((element) => {
        if (element.genre.includes("Drama")) {
            return element.director === "Steven Spielberg";
        }

    })

    return newArr.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (!moviesArray.length) {
        return 0
    }

    let scoreArr = moviesArray.reduce((a, c) => {
        if (!c.score) {
            return a;
        }
        return a + c.score
    }, 0)

    return Number(parseFloat(scoreArr / moviesArray.length).toFixed(2));
    // ask how we can do this without 'numbers pase floar' 
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let dramaArr = moviesArray.filter((element) => {
        return element.genre.includes("Drama")
    })

    return scoresAverage(dramaArr)
}

// Iteration 5

function orderByYear(moviesArray) {

    let yearsArr = moviesArray.map((movie) => {
        return movie;
    })
    return yearsArr.sort((a, b) => {
        return a.year - b.year || a.title.localeCompare(b.title)
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    let titleArr = moviesArray.map((movie) => {
        return movie.title
    })
    titleArr.sort()
    return titleArr.slice(0,20)

    //return moviesArray.map(e => e.title).sort().slice(0 , 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
