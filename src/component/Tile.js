import styles from "../styles/HomePage.module.css";
import chill from '../images/chill.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


export const Tile = ({
    listName = 'Songs'
    }) => {
    return(
    <div className={styles.Tile}>
        <img src={chill} alt="thumbnail" className={styles.Pic}></img>
        <div>
            <h5>{listName}</h5>
        </div>
    </div>
    )
}