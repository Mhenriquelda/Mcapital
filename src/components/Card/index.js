import React from 'react';
import styles from './Card.module.css';

function Card({ title, url, cover }) {
    return (
        <a 
          href={url} 
          target="_blank"
          rel="noopener noreferrer" 
          className={styles.cardWrapper}
        >
            <div className={styles.imageContainer}>
                <img src={cover} alt={title} className={styles.thumbnail} />
                <div className={styles.overlay}>
                    <span className={styles.playIcon}>▶</span>
                </div>
            </div>
            <div className={styles.cardContent}>
                <span className={styles.tag}>Vídeo Aula</span>
                <h4 className={styles.videoTitle}>{title}</h4>
            </div>
        </a>
    );
}

export default Card;