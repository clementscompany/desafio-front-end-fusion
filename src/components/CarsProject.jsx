import { Link } from "react-router-dom";
function CardProject({title, image, skils, link}) {
    return(
        <>
            <div className="cardProject int-hidden">
                <img src={image} alt="imageSistema" />
                <h3>{title}</h3>
                <div className="tecnologias">
                    {skils}
                </div>
                <Link to={link}>
                <i className="bi bi-link">{link}</i></Link>
            </div>
        </>
    );
}
export default CardProject;