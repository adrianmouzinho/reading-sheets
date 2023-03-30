import { AxiosRequestConfig } from "axios"
import { useEffect, useState } from "react"
import { api } from "../libs/axios"

export function useFetch<T = unknown>(url: string, dependencyList: Array<any> = [], options?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null)
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    api.get(url, options)
      .then(response => {
        setData(response.data)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, dependencyList)

  return { data, error, isFetching }
}