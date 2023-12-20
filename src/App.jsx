import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Servers from './pages/Servers'
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='servers' element={<Servers />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    )
}
