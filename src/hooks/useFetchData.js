/* import { useEffect } from "react"; */
import { useQuery } from "react-query";
import { getData } from "../utils/getData";


export const useFetchData = (endpoint, queryKey, query) => {

    const { data, isLoading, isError } = useQuery([`${queryKey}`, query], () =>
        getData(endpoint)
    );

    return { data, isLoading, isError };
}
