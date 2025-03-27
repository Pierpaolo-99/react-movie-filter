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
  const [title, setTitle] = useState('')

  useEffect(() => {

    let filtered = movies

    if (genre !== '') {
      filtered = filtered.filter(movie => genre === movie.genre);
    }

    if (title !== '') {
      filtered = filtered.filter(movie => movie.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()));
    }

    setFilteredMovies(filtered)

  }, [genre, title, movies])

  return (
    <div className="container">

      <h1 className="text-center mb-4">Movie Filter</h1>

      <div className="row mb-4">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Titolo</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="form-control form-control-lg"
              name="title"
              id="title"
              aria-describedby="helpId"
              placeholder="Batman, Interstellar..."
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="select_movies" className="form-label">Genere</label>
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
        </div>

        <div className="row">
          {filteredmovies.map(movie => (
            <div className="col-4 mb-4" key={movie.title}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted ">{movie.genre}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
