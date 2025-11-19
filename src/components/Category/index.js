import React from 'react';
import styles from './Category.module.css';
import Card from '../Card';

function Category({ categoryName, videos }) {
    return (
        <section className={styles.categorySection}>
            <div className={styles.headerWrapper}>
                <h3 className={styles.categoryTitle}>{categoryName}</h3>
                <div className={styles.line}></div>
            </div>
            <div className={styles.cardsGrid}>
                {videos.map(video => (
                  <Card 
                    key={video.id} 
                    id={video.id}
                    title={video.title}
                    url={video.url}
                    cover={video.cover}
                  />
                ))}
            </div>
        </section>
    );
}

export default Category;