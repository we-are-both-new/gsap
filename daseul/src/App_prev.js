import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Gsap01 from "./route/Gsap01";

const headerNav = [
    {
        id: 0,
        title: "GSAP Parallax Effect01",
        desc: "GSAP scrollTrigger - 애니메이션 기본 효과",
    },
    {
        id: 1,
        title: "GSAP Parallax Effect02",
        desc: "GSAP scrollTrigger - 애니메이션 기본 효과",
    },
];

function App() {
    return (
        <div className="App">
            <Header headerNav={headerNav}></Header>

            <Routes>
                <Route path="/gsap01" element={<Gsap01 />} />
            </Routes>
        </div>
    );
}

export default App;
