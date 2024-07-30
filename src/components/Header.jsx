import { Link } from "react-router-dom";
import { MobileContainer } from "./Elements";
import { useEffect, useState } from "react";
function Header({local}) {
    const [location, setLocation] = useState({home:"", contact:"", prooject:""});
    const [isActive, setIsactive] = useState(false);
    useEffect(()=>{
        switch (local) {
            case 0:
                setLocation({
                    home:"active",
                    contact:"",
                    prooject:""
                })
                break;
            case 1:
                setLocation({
                    home:"",
                    contact:"active",
                    prooject:""
                }) 
                break;
            case 2:
                setLocation({
                    home:"",
                    contact:"",
                    prooject:"active"
                })     
                break;
            default:
                break;
        }
    }, [local]);

    const backHome = () => {
        window.history.pushState(null, null, "/");
        window.dispatchEvent(new Event('popstate'));
    };
    
    const toggleMenu = () => {
        setIsactive(before=> !before);
    };
    return(
        <header className="header">
            <div className="leftHeader" onClick={backHome}><h1>MC</h1></div>
            <button className="menuButton mobileButton" onClick={toggleMenu}>
                <i className="bi bi-three-dots-vertical"></i>
            </button>
            <div className={isActive == true ? ("rigthHeader active") : ("rigthHeader") }>
                <button className="mobileButton" onClick={toggleMenu}>
                    <i className="bi bi-arrow-left"></i>
                </button>
                <Link to={"/"} className={ location.home }>Home</Link>
                <Link to={"/contacto"} className={ location.contact }>Contacto</Link>
                <Link to={"/projetos"} className={ location.prooject }>Projetos</Link>
                <MobileContainer>
                    <ul>
                        <li>Infoemações de contacto</li>
                        <li><Link><i className="bi bi-facebook"></i> Facebook</Link></li>
                        <li><Link><i className="bi bi-whatsapp"></i>Whatsapp</Link></li>
                        <li><Link><i className="bi bi-github"></i>Github</Link></li>
                        <li><Link><i className="bi bi-linkedin"></i>Linkedin</Link></li>
                    </ul>
                </MobileContainer>
            </div>
        </header>
    );
}
export default Header;