import ThreeD from "./components/threeD";
import WebAr from "./components/webAr";
import { useState } from "react";
import "./App.css";
import { CustomizationProvider } from "./components/context/Customization";

function App() {
  const [threeD, setTHreeD] = useState(true);

  return (
    <>
      <CustomizationProvider>
        <div className="Containers">
        <button
          className="ArButton"
          onClick={() => {
            setTHreeD(!threeD);
          }}
        >
          {" "}
          <img
            src="https://img.icons8.com/external-glyph-wichaiwi/1x/external-ar-technologies-disruption-glyph-wichaiwi.png"
            alt="icon"
          />
        </button>
        {threeD ? <ThreeD /> : <WebAr />}
        </div>
      </CustomizationProvider>
    </>
  );
}

export default App;
