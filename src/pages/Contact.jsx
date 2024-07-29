import { ContactContainer, HeaderContainer, MainContainer } from "../components/Elements";
import Header from "../components/Header";
import contact from "../../public/contact.svg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Sociales from "../components/Sociales";

function Contact(params) {
    return(
        <MainContainer>
           <HeaderContainer>
            <Header local={1}/>
           </HeaderContainer>
           <ContactContainer>
            <div className="contactForm">
                <form action="">
                    <h1>Conracte-me</h1> 
                    <div className="inputBox">
                        <label htmlFor="nome">Seu Nome:</label>
                        <input type="text" placeholder="digite o seu nome..." />
                    </div>

                    <div className="inputBox">
                        <label htmlFor="email">Seu email:</label>
                        <input type="text" placeholder="digite o seu nome..." />
                    </div> 
                    
                    <div className="inputBox">
                        <label htmlFor="nome">Seu Nome:</label>
                        <textarea name="message" id="message" placeholder="sua Mensagem"></textarea>
                    </div>

                    <div className="inputBox">
                       <button>Enviar</button>
                    </div>
                </form>
                <div className="rigthContact">
                    <div className="top">
                        <img src={ contact } alt="image contact" />
                    </div>
                    <div className="bottom">
                        <Link><i className="bi bi-geo-alt"></i> Luanda,Luabda Angola </Link>
                        <Link><i className="bi bi-telephone"></i> 932900362 </Link>
                        <Link><i className="bi bi-envelope-at-fill"></i>ajbcompany4881@gmail.com</Link>
                    </div>
                    <div className="social">
                        <Sociales />
                    </div>
                </div>
            </div>
           </ContactContainer>  
           <Footer />
        </MainContainer>
    );
}
export default Contact;