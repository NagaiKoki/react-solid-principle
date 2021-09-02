import useSWR from 'swr'

interface IUseFetch<T> {
  key: string
  fetcher: () => Promise<T>
}

interface IResponse<T> {
  data: T | undefined,
  error: string | undefined
  isValidating: boolean
}

export const useFetch = <T>({ key, fetcher }: IUseFetch<T>): IResponse<T> => {
  const { data, error, isValidating } = useSWR<T, string>(key, fetcher)

  return {
    data,
    error,
    isValidating
  }
}