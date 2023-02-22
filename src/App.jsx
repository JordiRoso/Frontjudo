import "./App.scss";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import { Header } from "./components/Header/Header";

import JudoList from "./containers/JudoList/JudoList";
import About from "./containers/About/About";
import JudoDetail from "./containers/JudoDetail/JudoDetail";
import Search from "./components/Search/Search";
import JudoListas from "./components/JudoListas/JudoListas";
import CreateResults from "./components/CreateResults/CreateResults";
import CreateCompes from "./components/CreateCompes/CreateCompes";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";

// import SearchForm from "./containers/SearchForm/SearchForm";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/result" />} />
          <Route path="/result" element={<JudoList />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<JudoDetail/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/listas" element={<JudoListas/>} />
          <Route path="/create" element={<CreateResults/>} />
          <Route path="/createcompes" element={<CreateCompes/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
