import { useQuery } from '@tanstack/react-query'
import { getData } from '../utils/getData'

export const useData = ({ endpoint, queryKey, initialData = undefined }) => {
  const { data, status } = useQuery(
    [...queryKey],
    ({ signal }) => getData({ endpoint, signal }),
    {
      initialData
    }
  )

  return { data, status }
}
