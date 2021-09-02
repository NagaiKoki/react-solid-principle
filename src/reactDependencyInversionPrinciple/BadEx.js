import useSWR from 'swr'

const fetcher = async (url) => {
  const res = await fetch(url)
  return res.json()
}

export const Todo = () => {
  const { data } = useSWR('https://jsonplaceholder.typicode.com/todos', fetcher)

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