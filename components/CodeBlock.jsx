'use client'
import { useState } from 'react';
import 'prismjs';
import 'prismjs/components/prism-javascript'; // Chargez les langages nécessaires
import 'prismjs/components/prism-css'; // Chargez les langages nécessaires
import 'prismjs/components/prism-jsx'; // Chargez les langages nécessaires
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import Prism from 'prismjs';
import styles from './CodeBlock.module.css';
import { FaRegCopy } from "react-icons/fa6";

export default function Terminal(props) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(props.contenu)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 1500);
            })
            .catch((err) => console.error('Échec de la copie:', err));
    };

    const highlightedCode = Prism.highlight(props.contenu, Prism.languages[props.langage], props.langage);

    return <div className={styles.container + ' ' +(props.type === 'terminal' ? styles.prompt : styles.editor)}>
        <div className={styles.terminal}>
            {props.type === 'terminal' && 'Terminal'}
            {!props.type && props.chemin}
            <div onClick={handleCopy} className={styles.button}>
                {isCopied ? 'copié' : <FaRegCopy />}
            </div>
        </div>
        <div className={styles.contenu}>
            <pre>
                <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
            </pre>
        </div>
    </div>
}