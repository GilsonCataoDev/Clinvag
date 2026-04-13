import "./Hero.css"
function Hero() {
    return (
        <div id="hero" className="hero">
            <div className="hero-label">Clínica de Vacinação em Garanhuns </div>
            <h1>Proteja quem você ama com cuidado.</h1>

            <p>Vacinas de alta qualidade com atendimento humanizado, parcelamento facilitado e agendamento pelo WhatsApp. Garanhuns, PE.</p>
            <div className="hero-btns">
                <a className="btn-primary" href="https://wa.me/5587999798910?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20vacina" target="_blank">Agendar agora</a>
                <a className="btn-secondary" href="#">Ver Vacinas</a>
            </div>
        </div>
    )
}

export default Hero;