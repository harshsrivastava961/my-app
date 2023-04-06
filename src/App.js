import ThreeD from "./components/threeD";
import WebAr from "./components/webAr";
import { useEffect, useState } from "react";
import "./App.css";
import QRCode from "qrcode";
// import Cloudinary from "./components/cloudinary";
import { CustomizationProvider } from "./components/context/Customization";

function App({url}) {
  const [threeD, setTHreeD] = useState(true);
  const [src, setSrc] = useState("");
  
  useEffect(()=> {
    QRCode.toDataURL(url).then(setSrc);
  },[url]);
  

  return (
    <>
      <CustomizationProvider>
        {/* <Cloudinary/> */}
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
        {threeD ? <ThreeD /> : <WebAr src={src} />}
        </div>
      </CustomizationProvider>
    </>
  );
}

export default App;