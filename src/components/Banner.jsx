import banner from "../../public/banner.svg";
function Banner(params) {
    return(
        <div className="banner">
            <div className="leftBanner">
                <h1>Moisés Clemente</h1>
                <h4>Desenvolvedor Fulstack Júnior</h4>
                <p>
                Sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes. Com expertise em desenvolvimento web e mobile, incluindo a criação de e-commerces robustos e plataformas de controle de segurança escolar, ofereço um serviço personalizado que atende às suas necessidades específicas. Explore meus projetos e veja como posso ajudar a transformar suas ideias em realidade!
                </p>
                <button className="buttons">Saber mais</button>
            </div>
            <div className="rigthBanner">
                <img src={banner} alt="Banner Image" />
            </div>
        </div>
    )
}
export default Banner;

