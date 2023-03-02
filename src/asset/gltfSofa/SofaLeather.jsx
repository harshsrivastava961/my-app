import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
import { useCustomization } from "../../components/context/Customization";
import * as THREE from "three";

export function SofaLeather(props) {
  const { chairColor } = useCustomization();
  const { nodes, materials } = useGLTF("/sofa.gltf");

  const LeatherTextureProps = useTexture({
    map: "./leatherWeave/Leather_Weave_005_basecolor.jpg",
    normalMap: "./leather/Leather_Padded_001_normal.jpg",
    roughnessMap: "./leather/Leather_Padded_001_roughness.jpg",
    aoMap: "./leather/Leather_Padded_001_ambientOcclusion.jpg",
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
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.43}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.15}>
            <mesh geometry={nodes.Object_4.geometry}>
              <meshStandardMaterial
                {...LeatherTextureProps}
                color={chairColor.color}
              />
            </mesh>
            <mesh geometry={nodes.Object_5.geometry}>
              <meshStandardMaterial
                {...LeatherTextureProps}
                color={chairColor.color}
              />
            </mesh>
            <mesh geometry={nodes.Object_6.geometry}
              material={materials.Metal}
            />
            <mesh geometry={nodes.Object_7.geometry}
              material={materials.PLastic}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/sofa.gltf");
