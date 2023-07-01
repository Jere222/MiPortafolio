import {Route, Routes} from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar'
import SobreMi from "./components/SobreMi"
import ItemListContainer from "./components/ItemListContainer"
import Contacto from "./components/Contacto"

function App() {
  

  return (
    <div className="fondo">
      <div className="container">
        <Navbar />
        <div className="containerRoutes">
          <Routes>
            <Route path="/" element={<SobreMi/>}/>
            <Route path="/:id" element={<ItemListContainer/>}/>
            <Route path="/contacto" element={<Contacto />}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
