/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import url from "../objects/Table.glb"

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(url)
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[0, -Math.PI / 2, 0]} scale={[0.008, 0.007, 0.006]}>
        <group position={[0, 72.1, -45]}>
          <mesh geometry={nodes.Betty_Extending_Dining_Table_Oak_and_White001_OAK_0.geometry} material={materials.material} />
          <mesh geometry={nodes.Betty_Extending_Dining_Table_Oak_and_White001_WHITE_0.geometry} material={materials.WHITE} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Table.glb')
