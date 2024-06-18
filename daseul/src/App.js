import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

import Gsap01 from "./route/GsapCont01";
import Gsap02 from "./route/GsapCont02";
import Gsap03 from "./route/GsapCont03";
import Gsap04 from "./route/GsapCont04";
import Gsap05 from "./route/GsapCont05";
import Gsap06 from "./route/GsapCont06";
import Gsap07 from "./route/GsapCont07";
import Gsap08 from "./route/GsapCont08";
import Gsap09 from "./route/GsapCont09";
import Gsap10 from "./route/GsapCont10";
import Gsap11 from "./route/GsapCont11";
import Gsap12 from "./route/GsapCont12";
import Gsap13 from "./route/GsapCont13";
import Gsap14 from "./route/GsapCont14";
import Gsap15 from "./route/GsapCont15";

function App() {
    return (
        <div className="App">
            <Header></Header>

            <Routes>
                <Route path="/gsap01" element={<Gsap01 />} />
                <Route path="/gsap02" element={<Gsap02 />} />
                <Route path="/gsap03" element={<Gsap03 />} />
                <Route path="/gsap04" element={<Gsap04 />} />
                <Route path="/gsap05" element={<Gsap05 />} />
                <Route path="/gsap06" element={<Gsap06 />} />
                <Route path="/gsap07" element={<Gsap07 />} />
                <Route path="/gsap08" element={<Gsap08 />} />
                <Route path="/gsap09" element={<Gsap09 />} />
                <Route path="/gsap10" element={<Gsap10 />} />
                <Route path="/gsap11" element={<Gsap11 />} />
                <Route path="/gsap12" element={<Gsap12 />} />
                <Route path="/gsap13" element={<Gsap13 />} />
                <Route path="/gsap14" element={<Gsap14 />} />
                <Route path="/gsap15" element={<Gsap15 />} />
            </Routes>
        </div>
    );
}

export default App;
