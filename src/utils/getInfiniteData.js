import axios from "axios";


const API = "https://api.themoviedb.org/3";


export const getInfiniteData = async (endpoint, page) => {
    try {

        const response = await axios.get(API + endpoint + "&page=" + page, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
                'Content-Type': 'application/json;charset=utf-8',
            }
        });
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}


