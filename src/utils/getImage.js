export const getImage = (path, width) => {
  return path !== null ? `https://image.tmdb.org/t/p/w${width}${path}` : null
}
