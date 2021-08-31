import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header"; 
import Application from "./components/applications";
import Carousel from "./components/carousel";
import Team from "./components/team";
import Awards from "./components/awards";
import Trust from "./components/trust";
import Footer from "./components/footer";
function App() {
  return (
   <div className="App">
    <Header/>
    <Application/>
    <Carousel/>
    <Team/>
    <Awards/>
    <Trust/>
    <Footer/>
   </div>
  )
}

export default App;
