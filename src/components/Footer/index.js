import React from 'react';
import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>M.Capital &copy; 2025. Todos os direitos reservados.</p>
            <p className={styles.disclaimer}>
                Isenção de responsabilidade: O conteúdo deste site é puramente educacional 
                e não constitui recomendação de investimento.
            </p>
        </footer>
    )
}
export default Footer;