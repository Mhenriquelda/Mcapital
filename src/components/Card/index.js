import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

function Card({ id, title, cover }) {
    return (
        <Link 
          to={`/watch/${id}`} 
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
        </Link>
    );
}

export default Card;