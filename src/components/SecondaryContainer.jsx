import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies)
    // console.log(movies.topRatedMovies)
    return (
        <div className='bg-black'>
            < div className='-mt-52 relative z-20 pl-12 ' >
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />

                <MovieList title={"Popular"} movies={movies.popularMovies} />
                <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
                <MovieList title={"Upcoming"} movies={movies.upComingMovies} />

            </ div>
        </div>

    )
}

export default SecondaryContainer