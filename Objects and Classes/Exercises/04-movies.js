function solve(input){

    const movies = [];

    for (const line of input) {
        const addMovieCommand = 'addMovie';
        const directefByCommand = 'directedBy';
        const onDateCommand = 'onDate';

        if(line.includes(addMovieCommand)){
           let movieName = line.substring(addMovieCommand.length + 1);
           const movie = {
            name: movieName,
           }
           movies.push(movie);
        }else if(line.includes(directefByCommand)){
            const[movieName, director] = line.split(` ${directefByCommand} `);
            const movie = movies.find(movie => movie.name === movieName)

            if(movie){
                movie.director = director;
            }

        }else if(line.includes(onDateCommand)){
            const[movieName, date] = line.split(` ${onDateCommand} `);
            const movie = movies.find(movie => movie.name === movieName)

            if(movie){
                movie.date = date;
            }

        }
        
    }

    movies
        .filter(movie => movie.director && movie.date)
        .forEach(movie => console.log(JSON.stringify(movie)));

}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )