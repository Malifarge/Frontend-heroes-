import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "./Pages/home";
import Heroe from "./Pages/heroe";

const App = () =>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/:slug' element={<Heroe />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App