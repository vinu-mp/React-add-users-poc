import Card from '../UI/Card';
import styles from './UserList.module.css';

const UserList = (props) => {
return <Card classes={styles.users}>{props.list.length > 0 && <ul>{props.list.map((item, index) => <li key={Math.random().toString()}>{item.username} {item.age}</li>)}</ul>}</Card>
}
export default UserList;
