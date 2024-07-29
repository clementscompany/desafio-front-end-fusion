import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./src/pages/Home";
import Contact from "./src/pages/Contact";
import Projects from "./src/pages/Projects";

function AppRoute() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/projetos" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoute;


