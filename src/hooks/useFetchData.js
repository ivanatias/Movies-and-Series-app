import { useEffect } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { getInfiniteData } from '../utils/getInfiniteData'

export const useFetchData = (
  endpoint,
  queryKey,
  query1,
  query2,
  initialData
) => {
  const { data, status, isFetchingNextPage, fetchNextPage } = useInfiniteQuery(
    [`${queryKey}`, query1, query2],
    ({ pageParam: page = 1, signal }) => {
      return getInfiniteData({ endpoint, page, signal })
    },
    {
      getNextPageParam: lastPage => {
        const { page, total_pages: totalPages } = lastPage
        return page < totalPages ? page + 1 : undefined
      },
      initialData
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
