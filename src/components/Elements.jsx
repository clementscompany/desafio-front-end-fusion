export const MainContainer = ({children, onScroll, references})=>{
    return <section className="mainContainer" onScroll={onScroll} ref={references}>{children}</section>
}
export const HeaderContainer = ({children}) =>{
    return <div className="headerContainer">{ children }</div>
}
export const MobileContainer = ({children}) =>{
    return <div className="mobileContainer">{ children }</div>
}
export const BannerContainer = ({children}) =>{
    return <div className="bannerContainer">{ children }</div>
}
export const FlexContainer = ({children, className}) =>{
    return <div className={"flexContainer "+ className}>{ children }</div>
}
export const ServicesContainer = ({children}) =>{
    return <div className={"servicesContainer"}>{ children }</div>
}
export const ContactContainer = ({children}) =>{
    return <div className={"contactContainer"}>{ children }</div>
}