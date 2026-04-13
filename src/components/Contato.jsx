import './Contato.css'

function Contato() {
    return (
        <section className="contato">
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.9346448196943!2d-36.47989892421046!3d-8.885668691125604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7070dfd22d76deb%3A0xe293d9094c16e448!2sClinvag%20-%20Cl%C3%ADnica%20de%20Vacina%C3%A7%C3%A3o.!5e0!3m2!1spt-BR!2sbr!4v1776109267693!5m2!1spt-BR!2sbr" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )
}

export default Contato;

//  