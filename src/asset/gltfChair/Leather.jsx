import React from "react";
import { useGLTF } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
import { useCustomization } from "../../components/context/Customization";
import * as THREE from "three";

export function LeatherModel(props) {
  const { chairColor } = useCustomization();

  const { nodes } = useGLTF('/scene.gltf');

  const LeatherTextureProps = useTexture({
    // map: "./leatherWeave/Leather_Weave_005_basecolor.jpg",
    // normalMap: "./leather/Leather_Padded_001_normal.jpg",
    // roughnessMap: "./leather/Leather_Padded_001_roughness.jpg",
    // aoMap: "./leather/Leather_Padded_001_ambientOcclusion.jpg",
    map: "./leatherPatch/Leather_008_BaseColor.jpg",
     normalMap: "./leatherPatch/Leather_008_Normal.jpg",
    roughnessMap: "./leatherPatch/Leather_008_Roughness.jpg",
    aoMap: "./leatherPatch/Leather_008_AmbientOcclusion.jpg",

  });

  LeatherTextureProps.map.repeat.set(2, 2);
  LeatherTextureProps.normalMap.repeat.set(2, 2);
  LeatherTextureProps.roughnessMap.repeat.set(2, 2);
  LeatherTextureProps.aoMap.repeat.set(2, 2);

  LeatherTextureProps.map.wrapS = LeatherTextureProps.map.wrapT =
    THREE.RepeatWrapping;
  LeatherTextureProps.normalMap.wrapS = LeatherTextureProps.normalMap.wrapT =
    THREE.RepeatWrapping;
  LeatherTextureProps.roughnessMap.wrapS =
    LeatherTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
  LeatherTextureProps.aoMap.wrapS = LeatherTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;

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
                {...LeatherTextureProps}
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
