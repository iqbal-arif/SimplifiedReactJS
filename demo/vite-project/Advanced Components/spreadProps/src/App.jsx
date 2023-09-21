import { useEffect, useState } from "react"
import { User } from "./User"

// Custom RAW HTML
const CUSTOM_HTML =
`<h1>Hi</h1>
<div>This is React RAW HTML injection Example</div>`

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
    {/* Example of RAW HTML Injection */}
    <div dangerouslySetInnerHTML={{__html:CUSTOM_HTML}}></div>
      <h1>User List</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {users.map(user => {
            // return( <User key={user.id} name={user.name} username={user.username} email={user.email} phone={user.phone}/>)
            // The above can be used with Spread Props as {...user}
            return( <User key={user.id} {...user}/>)
          })}
        </ul>
      )}
    </>
  )
}

export default App
