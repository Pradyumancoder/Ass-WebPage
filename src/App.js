import './App.css';
import { Navbar } from './Components/Navbar';
import { Banner } from './Components/Banner';
import { Introducation } from './Components/Introducation';
import { Support } from './Components/Support';
import Carousel from './Components/Carousel';

function App() {
  return (
   <div>
    <Navbar/>
    <Banner/>
    <Introducation/>
    <Carousel />
    <Support/>
   </div>
  );
}

export default App;
