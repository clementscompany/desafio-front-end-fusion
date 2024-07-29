import CardProject from "../components/CarsProject";
import { FlexContainer, HeaderContainer, MainContainer } from "../components/Elements";
import Header from "../components/Header";
import sistema from "../../public/sistema.jpeg";
import node from "../../public/node.png";
import deliver from "../../public/deliver.png";
import deliver2 from "../../public/deliver2.png";
import ecomerce from "../../public/ecomerce.png";
import dashboard from "../../public/dashboard.png";
import dashboard2 from "../../public/dashboard2.png";


function Projects(params) {
    return(
        <MainContainer>
           <HeaderContainer>
            <Header local={2}/>
           </HeaderContainer>
           <FlexContainer className={"projetosContainer"}>
            <CardProject 
                title={"Sistema de gestao escolar"}
                image={sistema} 
                link={"https://github.com/clementscompany/system-electron.git"}
                skils={
                   <>
                    <span>HTML</span>
                    <span>css</span>
                    <span>JS</span>
                    <span>PHP</span>
                   </>
                }
            />
            {/*  */}
            <CardProject 
                title={"API Node JS"}
                image={node} 
                link={"https://github.com/clementscompany"}
                skils={
                   <>                
                    <span>NODE JS</span>
                    <span>MYSQL</span>
                    <span>Express</span>
                   </>
                }
            />

               <CardProject 
                title={"APP Deliver"}
                image={deliver} 
                link={"https://github.com/clementscompany"}
                skils={
                   <>
                    <span>HTML</span>
                    <span>css</span>
                    <span>JS</span>
                    <span>PHP</span>
                   </>
                }
            />

               <CardProject 
                title={"APP Ecomerce"}
                image={ecomerce} 
                link={"https://github.com/clementscompany"}
                skils={
                   <>
                    <span>HTML</span>
                    <span>css</span>
                    <span>JS</span>
                    <span>PHP</span>
                   </>
                }
            />

               <CardProject 
                title={"GELADARIA ONLINE 1.1"}
                image={deliver2} 
                link={"https://github.com/clementscompany"}
                skils={
                   <>
                    <span>HTML</span>
                    <span>css</span>
                    <span>JS</span>
                    <span>IONIC</span>
                    <span>PHP</span>
                    <span>React</span>
                   </>
                }
            />

               <CardProject 
                title={"Dashboard ADMIN"}
                image={dashboard} 
                link={"https://github.com/clementscompany"}
                skils={
                   <>
                    <span>HTML</span>
                    <span>css</span>
                    <span>JS</span>
                    <span>React</span>
                    <span>PHP</span>
                   </>
                }
            />

               <CardProject 
                title={"Dashboard Design"}
                image={dashboard2} 
                link={"https://github.com/clementscompany"}
                skils={
                   <>
                    <span>HTML</span>
                    <span>css</span>
                    <span>JS</span>
                    <span>PHP</span>
                   </>
                }
            />
           </FlexContainer>
        </MainContainer>

    );
}
export default Projects;