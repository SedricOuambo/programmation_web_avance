import styles from './Footer.module.css'

export default function Footer() {
    return <footer className={styles.footer}>
        <div>&copy; OUAMB VISION</div>
        <span>
            <div>Développé par </div>
            <div>Sédric Ouambo Silatchom</div>
        </span>
        <div> Développeur Full Stack</div>
    </footer>
}