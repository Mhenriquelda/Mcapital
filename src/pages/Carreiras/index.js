import React from 'react';
import Container from '../../components/Container';

function Carreiras() {
    return (
        <div style={{ paddingTop: '80px' }}>
            <Container>
                <div style={{ padding: '50px 0', color: '#ccd6f6', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2.5rem', color: '#e6f1ff' }}>Trabalhe Conosco</h1>
                    <p style={{ maxWidth: '600px', margin: '20px auto', lineHeight: '1.6' }}>
                        Estamos construindo o futuro da educação financeira. Se você é apaixonado por tecnologia e mercado financeiro, junte-se ao time.
                    </p>
                    <div style={{ marginTop: '40px', padding: '30px', backgroundColor: '#112240', borderRadius: '8px', display: 'inline-block' }}>
                        <h3>Vagas em aberto</h3>
                        <ul style={{ textAlign: 'left', marginTop: '20px', color: '#64ffda' }}>
                            <li style={{ marginBottom: '10px' }}>• Desenvolvedor Frontend React (Sênior)</li>
                            <li style={{ marginBottom: '10px' }}>• Analista de Criptoativos</li>
                            <li style={{ marginBottom: '10px' }}>• Editor de Vídeo</li>
                        </ul>
                        <p style={{ marginTop: '20px', fontSize: '0.9rem', color: '#8892b0' }}>
                            Envie seu currículo para: <strong>talentos@mcapital.com</strong>
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}
export default Carreiras;