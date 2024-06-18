import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Data from "./constants/Data";

function App() {
    return (
        <div className="App">
            <Header Data={Data}></Header>

            <Routes>
                {Data.map((item, index) => (
                    <Route key={index} item={item} path={item.view} element={item.component}></Route>
                ))}
            </Routes>
        </div>
    );
}

export default App;
