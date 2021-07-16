import { useState, useContext } from 'react';
import UserContext, { UserContextInterface } from './store';

function ConsumerComponent() {
  const user = useContext(UserContext);

  return <div>
    <p>First: {user.first}</p>
    <p>Last: {user.last}</p>
    <button onClick={user.setUser}>Change name</button>
  </div>
}

function UseContextComponent() {
  const [user, setUser] = useState<UserContextInterface>({
    first: "Danh",
    last: "Nguyen"
  })

  const setUserHandler = () => {
    setUser({
      first: 'Danh updated',
      last: 'Nguyen'
    })
  }

  return <UserContext.Provider value={{ ...user, setUser: setUserHandler }}>
    <ConsumerComponent />
  </UserContext.Provider>
}

export default UseContextComponent;