import ThreeD from "./components/threeD";
import WebAr from "./components/webAr";
import { useState } from "react";
import './App.css';

function App() {
const [threeD, setTHreeD] = useState(true);
const [webAR, setWebAR] = useState(false);

  return (
    <>
    <div  className="Container">
      <button className="ArButton" onClick={()=> {setTHreeD (!threeD)}}>  <img
        src="https://img.icons8.com/external-glyph-wichaiwi/1x/external-ar-technologies-disruption-glyph-wichaiwi.png"
        alt="icon"
      /></button>
      { threeD ? <ThreeD />: <WebAr /> }
    </div>
    </>
  );
}

export default App;
