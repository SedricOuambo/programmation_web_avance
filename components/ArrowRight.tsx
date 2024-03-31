import { FaArrowAltCircleRight } from 'react-icons/fa';
import styles from './ArrowRight.module.css';
import { useHide } from './HideSliderProvider';

export default function Icon() {
    const [hide, setHide] = useHide();
    const handleClick = () =>{
        hide === 'true' ? setHide('false') : setHide('true');
    }

    return <div>
        <FaArrowAltCircleRight className={styles.icon +' '+ (hide === 'true' ? styles.display : styles.hide)} 
        onClick={handleClick}/>
    </div>
}