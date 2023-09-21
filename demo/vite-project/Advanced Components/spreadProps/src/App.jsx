import { useEffect, useState } from "react"
import { User } from "./User"

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState([])

  useEffect(() => {
    setIsLoading(true)

    const controller = new AbortController()
    fetch("users.json", {
      signal: controller.signal,
    })
      .then(res => res.json())
      .then(setUsers)
      .finally(() => {
        setIsLoading(false)
      })

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <>
      <h1>User List</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {users.map(user => {
            return( <User key={user.id} {...user}/>)
          })}
        </ul>
      )}
    </>
  )
}

export default App
