import { Link } from "react-router-dom";

function Footer(params) {
    const data = new Date();
    const year = data.getFullYear();
    return(
        <footer>
            <button title="Alterar o tema do sistema"><i className="bi bi-toggles2"></i></button>
            <span>CopyRigth <i className="bi bi-c-circle"></i> {year } | Todos os sireitos Reservados</span>
            <span>DesignedBy <Link>Moises Clemente</Link></span>
        </footer>
    );
}
export default Footer;