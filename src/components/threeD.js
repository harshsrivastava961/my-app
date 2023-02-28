import { Canvas } from "@react-three/fiber";
import { Model } from "../asset/gltfChair/Scene";
// import Model  from "../asset/gltfShoe/Shoe";

import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import Configurator from "./Configurator";
import "./Configurator.css";

function ThreeD() {
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
          <Model />
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
