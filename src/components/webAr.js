import frame from "../asset/barcode/frame.png"
import './WebAr.css';

function WebAr() {

  return (
    <div className="WebContainer">
      <p className="HeaderText">SCAN THE QR CODE FOR AR VIEW</p>
      <div className="ArImage">
      <img src={frame} alt="frame" />
      </div>
     
    </div>
  );
}

export default WebAr;
