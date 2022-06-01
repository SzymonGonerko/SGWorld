/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import url from "../objects/Door.glb"

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(url)
  return (
    <group rotation={[0, Math.PI / 1, 0]} scale={[0.075, 0.075, 0.075]} ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={8.83}>
        <group position={[-0.44, -0.1, 0.25]}>
          <group position={[0.81, 0.04, 0.8]}>
            <mesh geometry={nodes.Circle002_Glossy_0.geometry} material={materials.Glossy} />
          </group>
          <group position={[0.85, 0.02, 0.78]}>
            <mesh geometry={nodes.Plane003_Door_0.geometry} material={materials.Door} />
          </group>
          <mesh geometry={nodes.Plane001_Door_0.geometry} material={materials.Door} />
          <mesh geometry={nodes.Plane001_Glossy_0.geometry} material={materials.Glossy} />
        </group>
        <mesh geometry={nodes.Plane002_Door_0.geometry} material={materials.Door} />
        <mesh geometry={nodes.Plane002_Glossy_0.geometry} material={materials.Glossy} />
      </group>
    </group>
  )
}

useGLTF.preload('/Door.glb')
