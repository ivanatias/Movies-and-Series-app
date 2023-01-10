import { useQuery } from '@tanstack/react-query'
import { getData } from '../utils/getData'

export const useData = ({ endpoint, queryKey }) => {
  const { data, status } = useQuery([...queryKey], () => getData(endpoint))

  return { data, status }
}
