import { useState, useEffect } from 'react'

/**
* @link https://www.ankurkedia.com/blog/custom-hooks
*/
function useFetch (url?: string, options?: any) {
  const [status, setstatus] = useState<{
    loading: boolean,
    error?: Error,
    data?: any,
  }>({
    loading: false
  })

  function fetchNow (url: string, options?: any) {
    setstatus({ loading: true })
    fetch(url, options)
      .then((res: any) => res.json())
      .then((res: any) => {
        setstatus({ loading: false, data: res })
      })
      .catch((error: Error) => {
        setstatus({ loading: false, error })
      })
  }
  useEffect(() => {
    if (url) {
      fetchNow(url, options)
    }
  }, [])

  return { ...status, fetchNow }
}

export default useFetch
