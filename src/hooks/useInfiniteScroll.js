import { useEffect } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { getInfiniteData } from '../utils/getInfiniteData'

export const useInfiniteScroll = ({ endpoint, queryKey, initialData }) => {
  const { data, status, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam: page = 1, signal }) => {
      return getInfiniteData({ endpoint, page, signal })
    },
    getNextPageParam: lastPage => {
      const { page, total_pages: totalPages } = lastPage
      return page < totalPages ? page + 1 : undefined
    },
    initialData
  })

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
  }, [])

  return { data, status, isFetchingNextPage }
}
