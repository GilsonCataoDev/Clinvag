import "./Navbar.css"
function Navbar() {
    return (
        <>

            <nav className="navbar">
                <div className="nav-logo">Clin<span>vag</span></div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#vacinas">Vacinas</a></li>
                    <li><a href="#como-funciona">Como Funciona</a></li>
                    <li><a href="#contato">Contato</a></li>
                    <li><a href="#contato">Localização</a></li>
                </ul >
                <a href="https://wa.me/5587999798910?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20vacina" target="_blank" className="nav-cta"> Agendar agora</a>
            </nav >
        </>
    );
}

export default Navbar;