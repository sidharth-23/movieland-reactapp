import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg'
//668803e8

const API_URL = 'http://www.omdbapi.com?apikey=668803e8';

// const movie1 =
// {
//     "Title": "Split Second",
//     "Year": "1992",
//     "imdbID": "tt0105459",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BY2I2ZjBmMWEtMTVkZC00OTVkLWE1MjktOTc0MDgwNzZhYmU3XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
// }



const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovies('Split')
    }, []);


    return (
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {movies?.length > 0
                ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}

                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )}

        </div>
    );
}

export default App;
