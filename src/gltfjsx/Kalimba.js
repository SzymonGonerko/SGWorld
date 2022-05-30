/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import url from "../objects/Kalimba.glb"

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(url)
  return (
    <group rotation={[0, Math.PI / 3,0]} ref={group} {...props} dispose={null}>
      <mesh 
      geometry={nodes.Kalimba.geometry} 
      material={materials.DefaultMaterial} 
      rotation={[-Math.PI / 2, 0, 0]} 
      scale={[0.0005,0.0005,0.0005]} />
    </group>
  )
}

useGLTF.preload('/Kalimba.glb')
