import React from 'react';
import Container from '../../components/Container';

function Planos() {
    const cardStyle = {
        border: '1px solid #233554',
        padding: '40px',
        borderRadius: '8px',
        width: '300px',
        textAlign: 'left',
        backgroundColor: '#112240',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    };

    return (
        <div style={{ paddingTop: '80px' }}>
            <Container>
                <div style={{ padding: '50px 0', textAlign: 'center', color: '#ccd6f6' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '40px', color: '#e6f1ff' }}>Escolha seu Plano</h1>
                    
                    <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {/* Plano Free */}
                        <div style={cardStyle}>
                            <div>
                                <h2 style={{ color: '#64ffda', marginBottom: '10px' }}>Start</h2>
                                <h3 style={{ fontSize: '2rem', color: '#e6f1ff', margin: '0 0 20px 0' }}>R$ 0<span style={{fontSize: '1rem', color: '#8892b0'}}>/mês</span></h3>
                                <ul style={{ listStyle: 'none', padding: 0, color: '#8892b0', lineHeight: '2' }}>
                                    <li>✓ Acesso a vídeos básicos</li>
                                    <li>✓ Notícias semanais</li>
                                    <li>✓ Comunidade aberta</li>
                                </ul>
                            </div>
                            <button style={{ 
                                marginTop: '30px', 
                                padding: '12px', 
                                backgroundColor: 'transparent', 
                                border: '1px solid #64ffda', 
                                color: '#64ffda', 
                                borderRadius: '4px', 
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}>Criar Conta Grátis</button>
                        </div>

                        {/* Plano PRO */}
                        <div style={{ ...cardStyle, borderColor: '#64ffda', transform: 'scale(1.05)' }}>
                            <div>
                                <span style={{ backgroundColor: '#64ffda', color: '#0a192f', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>RECOMENDADO</span>
                                <h2 style={{ color: '#e6f1ff', marginBottom: '10px', marginTop: '10px' }}>M.Capital PRO</h2>
                                <h3 style={{ fontSize: '2rem', color: '#e6f1ff', margin: '0 0 20px 0' }}>R$ 29,90<span style={{fontSize: '1rem', color: '#8892b0'}}>/mês</span></h3>
                                <ul style={{ listStyle: 'none', padding: 0, color: '#ccd6f6', lineHeight: '2' }}>
                                    <li>✓ Todo conteúdo Start</li>
                                    <li>✓ Análises de Carteira</li>
                                    <li>✓ Calls de Cripto</li>
                                    <li>✓ Lives exclusivas</li>
                                </ul>
                            </div>
                            <button style={{ 
                                marginTop: '30px', 
                                padding: '12px', 
                                backgroundColor: '#64ffda', 
                                border: 'none', 
                                color: '#0a192f', 
                                borderRadius: '4px', 
                                cursor: 'pointer', 
                                fontWeight: 'bold',
                                fontSize: '1rem'
                            }}>Assinar Agora</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
export default Planos;