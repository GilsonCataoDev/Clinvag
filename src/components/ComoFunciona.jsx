import "./Comofunciona.css"
function ComoFunciona() {
    return (
        <div>
            <section id='como-funciona' className="como-funciona">
                <div className="section-label">PROCESSO</div>
                <h2 className="section-title">Como Funciona?</h2>
                <p className="section-sub">Simples, rápido e sem burocracia. Em poucos passos você e sua família estão protegidos.</p>
                <div className="steps">
                    <div className="step">
                        <div className="step-icon">💬</div>
                        <h4>Fale com a gente</h4>
                        <p>Entre em contato pelo WhatsApp e informe qual vacina você precisa. Nossa equipe orienta e tira todas as dúvidas.</p>
                    </div>

                    <div className="step">
                        <div className="step-icon">📅</div>
                        <h4>Escolha o horário</h4>
                        <p>Agendamos no melhor horário pra você. Atendemos por ordem de chegada e com hora marcada.</p>
                    </div>
                    <div className="step">
                        <div className="step-icon">✅</div>
                        <h4>Vacine-se com segurança</h4>
                        <p>Ambiente seguro, equipe qualificada e vacinas armazenadas com rigor técnico. Você sai protegido.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ComoFunciona;