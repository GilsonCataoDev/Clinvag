import "./Vacinas.css"
function Vacinas() {
    return (
        <div>
            <section id="vacinas"  className="vacinas">
                <div className="section-label">Imunização</div>
                <h2 className="section-title">Vacinas disponíveis na <em>Clinvag</em></h2>
                <p className="section-sub">Trabalhamos com as principais vacinas...</p>
                <div className="vacinas-grid">
                    <div className="vacina-card">
                        <div className="vacina-emoji">👶</div>
                        <h4>Tetra Viral</h4>
                        <p>Proteção contra sarampo, caxumba, rubéola e varicela.</p>
                    </div>
                    <div className="vacina-card">
                        <div className="vacina-emoji">🤧</div>
                        <h4>Gripe (Influenza)</h4>
                        <p>Vacina anual recomendada para todas as idades, especialmente crianças, idosos e grupos de risco.</p>
                    </div>
                    <div className="vacina-card">
                        <div className="vacina-emoji">🦠</div>
                        <h4>Febre Amarela
                        </h4>
                        <p>Essencial para viagens a áreas de risco e regiões endêmicas. Dose única com proteção vitalícia.</p>
                    </div>
                    <div className="vacina-card">
                        <div className="vacina-emoji">🧬</div>
                        <h4>Hepatite A e B</h4>
                        <p>Proteção contra infecções hepáticas transmitidas por água, alimentos e contato.</p>
                    </div>
                    <div className="vacina-card">
                        <div className="vacina-emoji">🛡️</div>
                        <h4>dTpa / dT
                        </h4>
                        <p>Reforço contra difteria, tétano e coqueluche. Recomendado para adultos e gestantes.</p>
                    </div>
                    <div className="vacina-card">
                        <div className="vacina-emoji">💊</div>
                        <h4>Outras vacinas
                        </h4>
                        <p>Meningite, pneumonia, HPV, dengue e mais. Consulte nosso cardápio completo pelo WhatsApp.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Vacinas;

//