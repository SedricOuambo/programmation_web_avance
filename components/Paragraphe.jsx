import styles from './Paragraphe.module.css';

export default function Paragraphe(props){
    return<div className={styles.div}>
        {props.contenu}
    </div>
}