const API = 'https://api.themoviedb.org/3'

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

const getDetailsEndpoint = ({ itemType, id }) => {
  return itemType === 'movie'
    ? `/movie/${id}?&append_to_response=videos,credits`
    : `/tv/${id}?&append_to_response=videos,credits`
}

const concatGenres = selectedGenres => {
  if (selectedGenres.length === 0) return ''

  return selectedGenres
    .map(({ id }) => id)
    .reduce((acc, curr) => acc + ',' + curr)
}

const formatListFromArray = ({ array, fallback = 'No data available' }) => {
  if (array.length === 0) return fallback

  const formatter = new Intl.ListFormat('en', {
    style: 'long',
    type: 'conjunction'
  })

  return formatter.format(array)
}

export {
  API,
  trimReleaseDate,
  pickRatingBadgeColor,
  trimRatingPoints,
  getMoviesEndpoint,
  getTVEndpoint,
  getDetailsEndpoint,
  formatListFromArray,
  concatGenres
}
