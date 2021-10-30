import { useQuery } from "react-query";
import { getData } from "../utils/getData";


export const useFetchDetails = (endpoint, queryKey, id) => {

    const { data, status } = useQuery([queryKey, id], () =>
        getData(endpoint));

    return { data, status };

}