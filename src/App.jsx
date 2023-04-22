import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/large/index.css'
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import NavBar from "./components/NavBar";
import HeadBar from "./components/HeadBar";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";

const App = () => {
  return(
    <>
    <Router>
      <HeadBar/>
      <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path='/SignUpPage' element={<SignUpPage />} />
          <Route path='/LoginPage' element={<LoginPage />} />
      </Routes>
      <NavBar/>
    </Router>
    </>
  ) 
  
};

export default App;
