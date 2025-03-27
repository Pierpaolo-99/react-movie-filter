import { useState, useEffect } from 'react'

export default function App() {

  const movies = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ]

  const [genre, setGenre] = useState('')
  const [filteredmovies, setFilteredMovies] = useState(movies)

  useEffect(() => {
    setFilteredMovies(genre === '' ? movies : movies.filter(movie => genre === movie.genre))
  }, [genre, movies])

  return (
    <div className="container">

      <div className="row">

        <div className="mb-3">
          <label htmlFor="" className="form-label">Movies</label>
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="form-select form-select-lg"
            name="select_movies"
            id="select_movies"
          >
            <option value="">Select</option>
            <option value='Fantascienza'>Fantascienza</option>
            <option value='Thriller'>Thriller</option>
            <option value='Romantico'>Romantico</option>
            <option value='Azione'>Azione</option>
          </select>
        </div>

        {filteredmovies.map(movie => (<div className="col-4" key={movie.title}>
          <div className="card">
            <h5 className="card-title">{movie.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted ">{movie.genre}</h6>
          </div>
        </div>))}
      </div>

    </div>
  )
}
