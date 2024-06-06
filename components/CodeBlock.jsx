'use client'
import { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript'; // Chargez le langage js
import 'prismjs/components/prism-css'; // Chargez le langage css
import 'prismjs/components/prism-jsx'; // Chargez le langage jsx
import 'prismjs/components/prism-xml-doc'; // Chargez le langage xml
import 'prismjs/components/prism-python'; //Charger le langage python
import 'prismjs/components/prism-csharp';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
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
    useEffect(() => {
        window.PRISM_DEFAULT_THEME = false;
        Prism.highlightAll();
    }, [props.contenu]);

    return <div className={styles.container + ' ' + (props.type === 'terminal' ? styles.prompt : styles.editor)}>
        <div className={styles.terminal}>
            {props.type === 'terminal' && 'Terminal'}
            {!props.type && props.chemin}
            <div onClick={handleCopy} className={styles.button}>
                {isCopied ? 'copié' : <FaRegCopy />}
            </div>
        </div>
        <div className={styles.contenu}>
            {/* <pre>
                <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
            </pre> */}
            <pre className="line-numbers">
                <code className={`language-${props.langage}`}>{props.contenu}</code>
            </pre>

            {/* <pre className="line-numbers">
                <code
                    className={`language-${props.langage}`}
                    dangerouslySetInnerHTML={{ __html: highlightedCode }}
                />
            </pre> */}
        </div>
    </div>
}