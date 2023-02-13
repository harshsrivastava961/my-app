import { Canvas } from "@react-three/fiber";
import { Model } from "../asset/gltfChair/Scene";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";

function ThreeD() {
  const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
  return (
    <Container >
      <Canvas camera={{ fov: 20 }} >
        <ambientLight intensity={3.25} />
        <directionalLight intensity={0.4} />
          <Model />
        <OrbitControls />
      </Canvas>
      <image ></image>
    </Container>
  );
}

export default ThreeD;
