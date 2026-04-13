import './Contato.css'

function Contato() {
    return (
        <section id="contato" className="contato">
            <div className="section-label">Onde estamos</div>
            <h2 className="section-title">Venha nos <em>visitar</em></h2>
            <p className="section-sub">Espaço moderno e acolhedor no coração de Garanhuns.</p>

            <div className="contato-grid">
                <div className="contato-infos">

                    <div className="info-item">
                        <div className="info-icon">📍</div>
                        <div>
                            <h5>Endereço</h5>
                            <p>Rua Francisco Gueiros, 62<br />Heliópolis, Garanhuns – PE</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="info-icon">💬</div>
                        <div>
                            <h5>WhatsApp</h5>
                            <p>(87) 9 9979-8910</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="info-icon">🕐</div>
                        <div>
                            <h5>Horário</h5>
                            <p>Consulte disponibilidade<br />pelo WhatsApp</p>
                        </div>
                    </div>

                    <a
                        href="https://wa.me/5587999798910"
                        target="_blank"
                        className="btn-primary"
                    >
                        💬 Agendar agora
                    </a>

                </div>

                <div className="mapa">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=..."
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />        </div>
            </div>
        </section>
    )
}

export default Contato;

//  