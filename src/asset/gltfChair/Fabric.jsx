
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
import { useCustomization } from "../../components/context/Customization";
import * as THREE from "three";

export function FabricModel(props) {
  const {chairColor } = useCustomization();

  const { nodes, materials } = useGLTF('/scene.gltf');

  const fabricTextureProps = useTexture({
    // map: "./fabric/Substance_Graph_BaseColor.jpg",
    // normalMap: './fabric/Substance_Graph_Normal.jpg',
    // roughnessMap: './fabric/Substance_Graph_Roughness.jpg',
    // aoMap: './fabric/Substance_Graph_AmbientOcclusion.jpg',
    map: "./fabricNew/Fabric_Lace_018_basecolor.jpg",
    normalMap: './fabricNew/Fabric_Lace_018_normal.jpg',
    roughnessMap: './fabricNew/Fabric_Lace_018_roughness.jpg',
    aoMap: './fabricNew/Fabric_Lace_018_ambientOcclusion.jpg',
  });

  fabricTextureProps.map.repeat.set(2, 2);
  fabricTextureProps.normalMap.repeat.set(2,2);
  fabricTextureProps.roughnessMap.repeat.set(2,2);
  fabricTextureProps.aoMap.repeat.set(2,2);

  fabricTextureProps.map.wrapS = fabricTextureProps.map.wrapT =
    THREE.RepeatWrapping;
  fabricTextureProps.normalMap.wrapS = fabricTextureProps.normalMap.wrapT = THREE.RepeatWrapping;
  fabricTextureProps.roughnessMap.wrapS = fabricTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
  fabricTextureProps.aoMap.wrapS = fabricTextureProps.aoMap.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Object_6.geometry}
              position={[0, 40.99, 0]}
              scale={43.31}
            >
              <meshStandardMaterial
                {...fabricTextureProps}
                color={chairColor.color}
              />

              {/* <meshStandardMaterial {...(material === "Leather" ? LeatherTextureProps: fabricTextureProps  )  } /> */}
              {/* <meshStandardMaterial {...LeatherTextureProps} color={chairColor.color} /> */}
              {/* material={materials.Base} */}
            </mesh>
          </group>
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/scene.gltf");
