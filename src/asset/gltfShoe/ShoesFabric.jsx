/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useTexture } from '@react-three/drei';
import { useCustomization } from '../../components/context/Customization';
import * as THREE from "three"; 

export default function ShoesFabric({ ...props }) {
  const { chairColor} =useCustomization();

  const fabricTextureProps = useTexture({
    // map: './fabric/Substance_Graph_BaseColor.jpg',
    // normalMap: './fabric/Substance_Graph_Normal.jpg',
    // roughnessMap: './fabric/Substance_Graph_Roughness.jpg',
    // aoMap: './fabric/Substance_Graph_AmbientOcclusion.jpg',
    map: "./fabricNew/Fabric_Lace_018_basecolor.jpg",
    normalMap: './fabricNew/Fabric_Lace_018_normal.jpg',
    roughnessMap: './fabricNew/Fabric_Lace_018_roughness.jpg',
    aoMap: './fabricNew/Fabric_Lace_018_ambientOcclusion.jpg',
  })

  const LeatherProps = useTexture({
    map: './leather/Leather_Padded_001_basecolor.jpg',
    normalMap: './leather/Leather_Padded_001_normal.jpg',
    roughnessMap: './leather/Leather_Padded_001_roughness.jpg',
    aoMap: './leather/Leather_Padded_001_ambientOcclusion.jpg',
  })
  // const PlasticTextureProps = useTexture({
  //   map: './plastic/Plastic_Tubes_001_basecolor.jpg',
  //   normalMap: './plastic/Plastic_Tubes_001_normal.jpg',
  //   roughnessMap: './plastic/Plastic_Tubes_001_roughness.jpg',
  //   aoMap: './plastic/Plastic_Tubes_001_ambientOcclusion.jpg',
  // })
  const AbstractTextureProps = useTexture({
    map: './abstract/Abstract_Organic_003_basecolor.jpg',
    normalMap: './abstract/Abstract_Organic_003_normal.jpg',
    roughnessMap: './abstract/Abstract_Organic_003_roughness.jpg',
    aoMap: './abstract/Abstract_Organic_003_ambientOcclusion.jpg',
  })
  const StoneTextureProps = useTexture({
    map: './stone/Substance_Graph_basecolor.jpg',
    normalMap: './stone/Substance_Graph_normal.jpg',
    roughnessMap: './stone/Substance_Graph_roughness.jpg',
    aoMap: './stone/Substance_Graph_ambientOcclusion.jpg',
  })
  // const LeatherTextureProps = useTexture({
  //   map: "./leatherPatch/Leather_008_BaseColor.jpg",
  //   normalMap: "./leatherPatch/Leather_008_Normal.jpg",
  //  roughnessMap: "./leatherPatch/Leather_008_Roughness.jpg",
  //  aoMap: "./leatherPatch/Leather_008_AmbientOcclusion.jpg",
  // })


  fabricTextureProps.map.repeat.set(2,2);
  fabricTextureProps.normalMap.repeat.set(2,2);
  fabricTextureProps.roughnessMap.repeat.set(2,2);
  fabricTextureProps.aoMap.repeat.set(2,2);

  fabricTextureProps.map.wrapS = fabricTextureProps.map.wrapT = THREE.RepeatWrapping;
  fabricTextureProps.normalMap.wrapS = fabricTextureProps.normalMap.wrapT = THREE.RepeatWrapping;
  fabricTextureProps.roughnessMap.wrapS = fabricTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
  fabricTextureProps.aoMap.wrapS = fabricTextureProps.aoMap.wrapT = THREE.RepeatWrapping;


  const group = useRef()
  const { nodes, materials } = useGLTF('/shoe.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
      {/* <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} /> */}
      <mesh geometry={nodes.shoe_1.geometry}>
      <meshStandardMaterial
                {...fabricTextureProps}
                color={chairColor.color}
              />      </mesh>

      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
      {/* <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} /> */}
      <mesh geometry={nodes.shoe_3.geometry}  >
      <meshStandardMaterial
                {...AbstractTextureProps}
                color={chairColor.color}
              />   </mesh>

      {/* <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} /> */}
      <mesh geometry={nodes.shoe_4.geometry}>

      <meshStandardMaterial
                {...LeatherProps}
                color={chairColor.color}
              />
      </mesh>
      {/* <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} /> */}
      <mesh geometry={nodes.shoe_5.geometry}> 
      <meshStandardMaterial
                {...StoneTextureProps}
                color={chairColor.color}
              /></mesh>
      <mesh geometry={nodes.shoe_6.geometry} >
      <meshStandardMaterial
                {...StoneTextureProps}
                color={chairColor.color}
              /> </mesh>
      <mesh geometry={nodes.shoe_7.geometry} >
      <meshStandardMaterial
                {...StoneTextureProps}
                color={chairColor.color}
              /> </mesh>
    </group>
  )
}

useGLTF.preload('/shoe.gltf')
