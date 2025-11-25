import React from 'react';
import Container from '../../components/Container';

function Sobre() {
    return (
        <div style={{ paddingTop: '80px' }}>
            <Container>
                <div style={{ padding: '50px 0', color: '#ccd6f6', maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#e6f1ff' }}>Sobre a M.Capital</h1>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                        Fundada com a visão de democratizar o acesso à inteligência financeira de alto nível, a M.Capital é mais do que uma plataforma de vídeos; é um ecossistema de aprendizado.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                        Nossa missão é transformar poupadores em investidores globais, oferecendo curadoria de conteúdo sobre Renda Variável, Criptoativos e Macroeconomia sem o "ruído" das redes sociais.
                    </p>
                </div>
            </Container>
        </div>
    );
}
export default Sobre;