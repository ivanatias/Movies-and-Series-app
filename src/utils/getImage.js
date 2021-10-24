import placeholder from "../images/placeholder.png";

export const getImage = (posterPath, width) => {
    const image = posterPath ? `https://image.tmdb.org/t/p/w${width}/${posterPath}` : placeholder;
    return image;
}