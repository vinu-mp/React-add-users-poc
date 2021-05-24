import {useState} from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [users, setusers] = useState({
    username: '',
    age: ''
  });

  const [errorState, setErrorState] = useState(false)
  const inputChangeHandler = (event, label) => {
    setusers((prevState) => {
      return {
        ...prevState,
        [label]: event.target.value
      }
    });
  }

  const addUSerHandler = (event) => {
    event.preventDefault();
    if(users.username.trim().length ===0 || users.age.trim().length === 0) {
      setErrorState(true);
      return;
    }
    if(+users.age < 1) {
      setErrorState(true);
      return;
    }
    props.addUsers(users);
    setusers({
      username: '',
      age: ''
    })
  }

  const modalCloseHandler = () => {
    setErrorState(false)
  }

  return (
    <div>
      {errorState && <ErrorModal onClick={modalCloseHandler} message='An error occured' title='something went wrong'/>}
      <Card classes={styles.input}>
        <form onSubmit={addUSerHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={users.username} onChange={(event) => inputChangeHandler(event,'username')}></input>
          <label htmlFor="age">Age</label>
          <input id="age" type="number" value={users.age} onChange={(event) => inputChangeHandler(event,'age')}></input>
          <Button type="submit">Add</Button>
        </form>
      </Card>
    </div>
  )
}
export default AddUser;
