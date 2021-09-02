import { useFetch } from './useFetch'

type ResponseType = {
  id: number
  title: string
}

const fetcher = async (): Promise<ResponseType[]> => {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  const res = await fetch(url)
  return res.json()
}

export const Todo = () => {
  const { data } = useFetch<ResponseType[]>({ key: '/todos', fetcher })

  if (!data) return <p>loading....</p>
  
  return (
    <ul>
    {data.map((todo) => {
      return (
        <li>
          <span>{todo.id}</span>
          <span>{todo.title}</span>
        </li>
      );
    })}
  </ul>
  )
}