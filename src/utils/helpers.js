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

export { trimReleaseDate, pickRatingBadgeColor, trimRatingPoints }
