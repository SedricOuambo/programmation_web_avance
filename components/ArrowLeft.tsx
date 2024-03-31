import { FaArrowAltCircleLeft } from 'react-icons/fa';
import styles from './ArrowLeft.module.css';
import { useHide } from './HideSliderProvider';

export default function Icon() {
    const [hide, setHide] = useHide();
    const handleClick = () =>{
        hide === 'true' ? setHide('false') : setHide('true');
    }

    return <div>
        <FaArrowAltCircleLeft className={styles.icon +' '+ (hide === 'true' ? styles.hide : styles.display)} 
        onClick={handleClick}/>
    </div>
}