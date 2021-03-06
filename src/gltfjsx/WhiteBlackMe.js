/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import url from "../objects/WhiteBlackMe.glb"

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(url)
  return (
    <group scale={[0.701, 0.701, 0.701]} ref={group} {...props} dispose={null}>
      <group scale={[1, 0.82, 1]}>
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh geometry={nodes.Object_11.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Object_11.skeleton} />
        <skinnedMesh geometry={nodes.Object_15.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Object_15.skeleton} />
        <skinnedMesh geometry={nodes.Object_17.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Object_17.skeleton} />
        <skinnedMesh geometry={nodes.Object_19.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Object_19.skeleton} />
      </group>
      <mesh geometry={nodes.FBHead.geometry} material={materials['FBHead_preview_mat.001']} position={[0, 1.4, 0]} scale={0.12} />
      <mesh geometry={nodes.Tall_Drinking_Glass.geometry} material={materials.GLS0002_Glass} position={[0.03, 0.98, 0.24]} rotation={[0, 0, -0.11]} scale={0.79} />
    </group>
  )
}

useGLTF.preload('/WhiteBlackMe.glb')
