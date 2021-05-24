
import AddUSer from './Components/Users/AddUser'
import UserList from './Components/Users/UserList'
import {useState} from 'react';

function App() {
  const [userList, setUserList] = useState([]);

   const addUsers = (users) => {
    setUserList((prevState) => [...prevState, {...users}])
   }

  return (
    <div>
      <AddUSer addUsers={addUsers}/>
      <UserList list={userList}/>
    </div>
  );
}

export default App;
