import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createThirdwebClient } from "thirdweb";
import Home from './pages/Home';
import NavBar from './components/NavBar';

export default function App(){

  const client = createThirdwebClient({
    clientId: "fbbbd2edde9aa214f9355632e24386d6",
  });


  return <BrowserRouter>
    <NavBar client={client}/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
      </Routes>
  </BrowserRouter>
}