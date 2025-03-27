import { useState, useEffect } from 'react'

const movies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

export default function App() {

  return (
    <div className="container">

      <div className="row">
        {movies.map(movie => (<div className="col-4">
          <div className="card" key={movie.genre}>
            <h5 class="card-title">{movie.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted ">{movie.genre}</h6>
          </div>
        </div>))}
      </div>

    </div>
  )
}
