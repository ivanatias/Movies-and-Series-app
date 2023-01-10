const trimReleaseDate = date => {
  return date ? date.substring(0, 4) : 'No date available'
}

const trimRatingPoints = ratingPoints => {
  if (ratingPoints === 0) return 'No rating'

  return ratingPoints.toFixed(1)
}

const pickRatingBadgeColor = votePoints => {
  if (votePoints <= 5) {
    return 'danger'
  }

  if (votePoints < 8) {
    return 'warning'
  }

  if (votePoints >= 8) {
    return 'success'
  }
}

const getMoviesEndpoint = ({ genres = '', searchQuery }) => {
  if (!searchQuery) {
    return `/discover/movie?sort_by=popularity.desc&with_genres=${genres}`
  }

  return `/search/movie?query=${searchQuery}`
}

const getTVEndpoint = ({ genres = '', searchQuery }) => {
  if (!searchQuery) {
    return `/discover/tv?sort_by=popularity.desc&with_genres=${genres}`
  }

  return `/search/tv?query=${searchQuery}`
}

export {
  trimReleaseDate,
  pickRatingBadgeColor,
  trimRatingPoints,
  getMoviesEndpoint,
  getTVEndpoint
}
