import { Link } from "react-router-dom";

function  Sociales(params) {
    return(
        <div className="sociales init-hidden">
            <Link>
                <i className="bi bi-facebook"><span>facebook</span></i>
            </Link>
            <Link>
                <i className="bi bi-instagram"><span>instagram</span></i>
            </Link>
            <Link>
                <i className="bi bi-github"><span>Github</span></i>
            </Link>
            <Link>
                <i className="bi bi-linkedin"><span>Linkedin</span></i>
            </Link>
        </div>
    );
}
export default Sociales;