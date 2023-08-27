import Banner from '../components/Banner/Banner'
import CardListaArticulo from '../components/CardListaArticulo/CardListaArticulo'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import MockupProductList from '../components/MockupProductList/MockupProductList'
import Navbar from '../components/Navbar/Navbar'
import { Productos } from '../components/Productos/Productos'
import SobreNosotros from '../components/SobreNosotros/SobreNosotros'
import './App.css'

function App() {

  return (
    <>
    <div className="app-container">
      <Navbar/>
      <Hero/>
      <SobreNosotros/>
      <Productos/>
      <Banner/>
      <Footer/>
    </div>    
    </>
  )
}

export default App
