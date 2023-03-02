import React from "react";
import { useGLTF } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
import { useCustomization } from "../../components/context/Customization";
import * as THREE from "three";

export function SofaFabric(props) {
  const { nodes, materials } = useGLTF("/sofa.gltf");
  const { chairColor } = useCustomization();

  const fabricTextureProps = useTexture({
    map: "./fabric/Substance_Graph_BaseColor.jpg",
    normalMap: "./fabric/Substance_Graph_Normal.jpg",
    roughnessMap: "./fabric/Substance_Graph_Roughness.jpg",
    aoMap: "./fabric/Substance_Graph_AmbientOcclusion.jpg",
  });

  fabricTextureProps.map.repeat.set(2, 2);
  fabricTextureProps.normalMap.repeat.set(2, 2);
  fabricTextureProps.roughnessMap.repeat.set(2, 2);
  fabricTextureProps.aoMap.repeat.set(2, 2);

  fabricTextureProps.map.wrapS = fabricTextureProps.map.wrapT =
    THREE.RepeatWrapping;
  fabricTextureProps.normalMap.wrapS = fabricTextureProps.normalMap.wrapT =
    THREE.RepeatWrapping;
  fabricTextureProps.roughnessMap.wrapS =
    fabricTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
  fabricTextureProps.aoMap.wrapS = fabricTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.43}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.15}>
            <mesh geometry={nodes.Object_4.geometry}>
              <meshStandardMaterial
                {...fabricTextureProps}
                color={chairColor.color}
              />
            </mesh>
            <mesh geometry={nodes.Object_5.geometry}>
              <meshStandardMaterial
                {...fabricTextureProps}
                color={chairColor.color}
              />
            </mesh>
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials.Metal}
            />
            <mesh
              geometry={nodes.Object_7.geometry}
              material={materials.PLastic}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/sofa.gltf");
