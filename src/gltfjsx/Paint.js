/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import url from "../objects/Paint.glb"

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(url)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.001']} position={[-3.3, 1.5, -2]} rotation={[-1.57, 0, -1.6]} scale={[0.4, 0.02, 0.4]}  />
    </group>
  )
}

useGLTF.preload('/Paint.glb')