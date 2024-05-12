import { Route, Routes, BrowserRouter } from "react-router-dom";
import Sign from "./pages/Sign";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Sign />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
