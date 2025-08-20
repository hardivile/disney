import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from './assets/Comonets/Header'
import Slider from './assets/Comonets/Slider'
import ProductionHouse from './assets/Comonets/ProductionHouse'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="className">
        <Header/>
        
        <Slider/>
        <ProductionHouse/>


      </div>
    </>
  );
}

export default App;
