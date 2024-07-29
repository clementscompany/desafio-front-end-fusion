import { useEffect, useRef } from "react";
import Banner from "../components/Banner";
import { BannerContainer, HeaderContainer, MainContainer, ServicesContainer } from "../components/Elements";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Services from "../components/Services";
import Sociales from "../components/Sociales";
import Stacks from "../components/Stacks";
function Home() {
   const references = useRef();
   useEffect(()=>{
      
      var cards = references.current.querySelectorAll(".init-hidden");
      const observer = new IntersectionObserver((entries)=>{
         entries.forEach(entry =>{
            if (entry.intersectionRatio >= 1) {
               entry.target.classList.add('active');
               console.log(entry);
            } else{
               entry.target.classList.remove('active')
            }
         })
      },{
         threshold:[0,0.5,1]
      })
      cards.forEach(card => {
         observer.observe(card);
      });
   }, []);
    return(
        <MainContainer references={references}>
           <HeaderContainer>
              <Header local={0}/>
           </HeaderContainer>
           <BannerContainer>
              <Banner />
           </BannerContainer>
              <Sociales />
            <ServicesContainer>
               <Services />
            </ServicesContainer>
              <Stacks />
              <Footer />
        </MainContainer>
    );
}
export default Home;