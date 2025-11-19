import React from 'react';
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
                    <button className={styles.btnPrimary}>Começar Agora</button>
                    <button className={styles.btnSecondary}>Ver Planos</button>
                </div>
            </div>
            <div className={styles.heroVisual}>
                {/* Abstração de gráfico ou elemento visual */}
                <div className={styles.graphBar}></div>
                <div className={styles.graphBar}></div>
                <div className={styles.graphBar}></div>
            </div>
        </section>
    );
}

export default Banner;