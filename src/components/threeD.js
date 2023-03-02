import { Canvas } from "@react-three/fiber";
import {FabricModel} from "../asset/gltfChair/Fabric";
import {LeatherModel} from "../asset/gltfChair/Leather";
import { useCustomization } from "./context/Customization";
// import { SofaLeather } from "../asset/gltfSofa/SofaLeather";
// import {SofaFabric} from "../asset/gltfSofa/SofaFabric";
import ShoesFabric from "../asset/gltfShoe/ShoesFabric";
import ShoesLeather from "../asset/gltfShoe/ShoesLeather"

// import Model  from "../asset/gltfShoe/Shoe";

import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import Configurator from "./Configurator";
import "./Configurator.css";

function ThreeD() {
  const { material } = useCustomization();

  const Container = styled.div`
    width: 50vw;
    height: 90vh;
  `;
  return (
    <div className="OuterContainer">
      <Container>
        <Canvas camera={{ fov: 20 }}>
          <ambientLight intensity={3.25} />
          <directionalLight intensity={0.4} />
       {/* {material === "Leather" ? <LeatherModel/> : <FabricModel/>} */}
       {material === "Leather" ? <ShoesLeather/> : <ShoesFabric/>}

       {/* {material === "Leather" ? <SofaLeather/> : <SofaFabric/>} */}
          <OrbitControls />
        </Canvas>
      </Container>
      <div>
        <Configurator />
      </div>
    </div>
  );
}

export default ThreeD;
