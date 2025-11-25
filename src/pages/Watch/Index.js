import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Watch.module.css'; // Certifique-se de criar este arquivo CSS
import Container from '../../components/Container';

function Watch() {
    const { id } = useParams(); // Pega o ID da URL
    const [video, setVideo] = useState(null);

    // Busca o vídeo correspondente no db.json
    useEffect(() => {
        fetch('/db.json')
            .then(response => response.json())
            .then(data => {
                const foundVideo = data.videos.find(v => v.id === id);
                setVideo(foundVideo);
            })
            .catch(err => console.error("Erro ao carregar vídeo", err));
    }, [id]);

    // Se não encontrar o vídeo ou estiver carregando
    if (!video) return <div className={styles.loading}>Carregando player...</div>;

    return (
        <section className={styles.watchSection}>
            <Container>
                <div className={styles.contentWrapper}>
                    {/* Player do YouTube */}
                    <div className={styles.videoContainer}>
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    
                    {/* Informações do Vídeo */}
                    <div className={styles.videoInfo}>
                        <span className={styles.categoryTag}>{video.category}</span>
                        <h1 className={styles.videoTitle}>{video.title}</h1>
                        <p className={styles.description}>
                            Assista a este conteúdo exclusivo curado pela equipe M.Capital para aprimorar seus conhecimentos em {video.category}.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Watch;