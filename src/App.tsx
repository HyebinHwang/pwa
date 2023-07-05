import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Stadium from "./Stadium";
import Background from "./Background";

function App() {
  return (
    <Background>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stadium" element={<Stadium />} />
      </Routes>
    </Background>
  );
}

export default App;
