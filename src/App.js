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
        {threeD ? <ThreeD /> : <WebAr />}
        </div>
      </CustomizationProvider>
      <model-viewer
        src="https://cdn.glitch.global/612f90f6-8704-4969-8e31-17d3069b0154/arm_chair__furniture%20(1).glb?v=1676215192645"
        ios-src="https://cdn.glitch.global/612f90f6-8704-4969-8e31-17d3069b0154/Arm_chair__Furniture.usdz?v=1676215324669"
        shadow-intensity="1"
        ar={true}
        auto-rotate={true}
        camera-controls
        style={{ width: "100%", height: "500px" }} 
         >
          <button
              slot="ar-button"
              style={{
                backgroundColor: "white",
                borderRadius: "4px",
                border: "none",
                position: "absolute",
                top: "16px",
                right: "16px",
              }}
            >
              👋 Activate AR
            </button>
      </model-viewer>
      <div  ><img style={{ width: "200px", height: "200px" }} src={src} alt = "hello"/></div>
      
    </>
  );
}

export default App;
