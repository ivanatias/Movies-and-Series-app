import { useEffect } from 'react'
import { useInfiniteQuery } from 'react-query'
import { getInfiniteData } from '../utils/getInfiniteData'

export const useFetchData = (endpoint, queryKey, query1, query2) => {
  const { data, status, isFetchingNextPage, fetchNextPage } = useInfiniteQuery(
    [`${queryKey}`, query1, query2],
    ({ pageParam = 1 }) => getInfiniteData(endpoint, pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1
        }
        return undefined
      }
    }
  )

  useEffect(() => {
    const onScroll = async event => {
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement
      if (scrollHeight - scrollTop <= clientHeight * 1.2) {
        await fetchNextPage()
      }
    }

    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
    // eslint-disable-next-line
  }, [])

  return { data, status, isFetchingNextPage }
}
