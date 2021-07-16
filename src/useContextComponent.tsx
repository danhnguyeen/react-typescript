import { useState, useContext } from 'react';
import UserContext, { UserState } from './store';

function ConsumerComponent() {
  const user = useContext(UserContext);

  return <div>
    <p>First: {user.first}</p>
    <p>Last: {user.last}</p>
  </div>
}

function UseContextComponent() {
  const [user, setUser] = useState<UserState>({
    first: "Danh",
    last: "Nguyen"
  })

  return <UserContext.Provider value={user}>
    <ConsumerComponent />
  </UserContext.Provider>
}

export default UseContextComponent;