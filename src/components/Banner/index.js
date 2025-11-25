import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Banner.module.css';

function Banner() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <span className={styles.tagline}>Educação Financeira Premium</span>
                <h1>Domine o Jogo do <br /> <span className={styles.highlight}>Dinheiro</span></h1>
                <p>
                    Acesse as melhores estratégias de investimento, análise de mercado 
                    e criptoativos curados por Marcos Henrique.
                </p>
                <div className={styles.ctaGroup}>
                    <Link to="/planos" className={styles.btnPrimary}>Começar Agora</Link>
                    <Link to="/planos" className={styles.btnSecondary}>Ver Planos</Link>
                </div>
            </div>
            <div className={styles.heroVisual}>
                <div className={styles.graphBar}></div>
                <div className={styles.graphBar}></div>
                <div className={styles.graphBar}></div>
            </div>
        </section>
    );
}

export default Banner;