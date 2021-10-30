import placeholder from "../images/personplaceholder.png";

export const getPersonImage = (posterPath, width) => {
    const image = posterPath ? `https://image.tmdb.org/t/p/w${width}/${posterPath}` : placeholder;
    return image;
}