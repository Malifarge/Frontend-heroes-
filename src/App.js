import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "./Pages/home";
import Heroe from "./Pages/heroe";
import Power from "./Pages/power";

const App = () =>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/:slug' element={<Heroe />}/>
      <Route path='/:slug/power' element={<Power />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App