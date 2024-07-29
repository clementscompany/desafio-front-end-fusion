import { FlexContainer } from "./Elements";
import html from "../../public/html.svg";
import bootstrapp from "../../public/bootstrap.svg";
import css from "../../public/css.svg";
import js from "../../public/js.svg";
import sass from "../../public/sass.svg";
import react from "../../public/react.svg";
import node from "../../public/node.svg";
import php from "../../public/php.svg";
import postgre from "../../public/postgresql.svg";
import mysql from "../../public/mysql.svg";
import express from "../../public/express.svg";
import insomnia from "../../public/insomnia.svg";
function Stacks(){
    return(
        <section className="staks">
            <div className="topSta">
                <h1>Minhas Stacks</h1>
                
                <div className="">
                    <h3>Front-End</h3>
                    <br />
                    <br />
                    <FlexContainer className={"imagesSkills init-hidden"}>
                        <img src={html} alt="imageHTML" />
                        <img src={css} alt="imageHTML" />
                        <img src={js} alt="imageHTML" />
                        <img src={react} alt="imageHTML" />
                        <img src={bootstrapp} alt="imageHTML" />
                        <img src={sass} alt="imageHTML" />
                    </FlexContainer>
                </div>
 
                <div className="skilsBack">
                    <h3>Back-End</h3>
                    <br />
                    <br />
                    <FlexContainer className={"imagesSkills init-hidden"}>
                        <img src={php} alt="imageHTML" />
                        <img src={node} alt="imageHTML" />
                        <img src={mysql} alt="imageHTML" />
                        <img src={postgre} alt="imageHTML" />
                        <img src={express} alt="imageHTML" />
                        <img src={insomnia} alt="imageHTML" />
                    </FlexContainer>
                </div>
            </div>
        </section>
    );
}
export default Stacks;