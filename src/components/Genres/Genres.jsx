import React, { useState, useEffect } from 'react'
import Badge from 'react-bootstrap/Badge'
import { getData } from '../../utils/getData'
import { FaTimes } from 'react-icons/fa'

const Genres = ({ type, selectedGenres, setSelectedGenres }) => {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    let isMounted = true

    getData(`/genre/${type}/list`).then(data => {
      if (isMounted) setGenres(data.genres)
    })

    return () => {
      isMounted = false
    }
    // eslint-disable-next-line
  }, [])

  const handleAdd = genre => {
    setSelectedGenres([...selectedGenres, genre])
    setGenres(prev => prev.filter(g => g.id !== genre.id))
  }

  const handleRemove = genre => {
    setSelectedGenres(prev => prev.filter(g => g.id !== genre.id))
    setGenres([...genres, genre])
  }

  return (
    <div className='mb-3'>
      {selectedGenres.map(genre => (
        <Badge
          bg='danger'
          className='genres-badge me-1 mb-2'
          key={genre.id}
          onClick={() => handleRemove(genre)}
        >
          {genre.name}
          <FaTimes className='ms-1' />
        </Badge>
      ))}

      {genres.map(genre => (
        <Badge
          key={genre.id}
          className='genres-badge me-1 mb-2'
          bg='secondary'
          onClick={() => handleAdd(genre)}
        >
          {genre.name}
        </Badge>
      ))}
    </div>
  )
}

export default Genres
