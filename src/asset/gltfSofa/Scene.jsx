
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.43}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.15}>
            <mesh geometry={nodes.Object_4.geometry} material={materials.Leather} />
            <mesh geometry={nodes.Object_5.geometry} material={materials.Leather} />
            <mesh geometry={nodes.Object_6.geometry} material={materials.Metal} />
            <mesh geometry={nodes.Object_7.geometry} material={materials.PLastic} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
