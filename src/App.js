import React, {useState, useEffect, Suspense} from "react";
import { Canvas } from "@react-three/fiber"
import { Stars, PointerLockControls } from "@react-three/drei"
import { Physics } from "@react-three/cannon"
import { Ground } from "./meshes/Ground"
import { Player } from "./meshes/Player"
import { SpotLight, PositionalAudio} from "@react-three/drei"


import {BackWall} from "./meshes/BackWall"
import {LeftWall} from "./meshes/LeftWall"
import {RightWall} from "./meshes/RightWall"
import {Ceiling} from "./meshes/Ceiling"
import { TextSkills } from "./meshes/TextSkills"
import {TextFavouriteThings} from './meshes/TextFavouriteThings'
import { TextWhereAreWe } from "./meshes/TextWhereAreWe";
import {TextWhereWhoAmI} from "./meshes/TextWhoAmI"
import { TextWhatCanIDo } from "./meshes/TextWhatCanIDo";
import { TextGreatPossibility } from "./meshes/TextGreatPossibility";

import LightsToFavourite from "../src/lights/LightsToFavourite"
import LightToPaint from "../src/lights/LightToPaint"
import LightToSkills from "../src/lights/LightToSkills"
import LightToWhereAreWe from "./lights/LightToWhereAreWe";
import LightToWhoAmI from "./lights/LightToWhoAmI";
import LightToWhatCanIDo from "./lights/LightToWhatCanIDo";
import LightToGreatPossibility from "./lights/LightToGreatPossibility"

import music from "../src/sounds/SmellsLikeTeenSpirit.mp3"

import MovingSpotLights from "./lights/MovingSpotLights"
import { VanillaDate } from "./meshes/VanillaDate"

import {
  MeshWobbleMaterial,
  Sphere, Html
} from "@react-three/drei";


import Paint from "./gltfjsx/Paint"
import FrontWall from "./gltfjsx/FrontWall"
import Kalimba from "./gltfjsx/Kalimba"
import Table from "./gltfjsx/Table"
import Book from "./gltfjsx/Book"
import Laptop from "./gltfjsx/Laptop"
import Stereo from "./gltfjsx/Stereo"
import Chair from "./gltfjsx/Chair"
import Door from "./gltfjsx/Door"

import WhiteBlackMe from "./gltfjsx/WhiteBlackMe"



export default function App() {
  return (
    <>
    <Canvas shadows gl={{ alpha: false }} camera={{ fov: 45 }}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={1} fade speed={1} />
      <color attach="background" args={['#040811']} />

      <pointLight castShadow intensity={0.12} position={[0, 1, -5]} />
      <Physics gravity={[0, -30, 0]}>
        
        <Player />



        <LightToPaint/>
        <Paint />

        <LightToGreatPossibility/>
        <TextGreatPossibility/>
        
        

        <LightsToFavourite/>
        <TextFavouriteThings/>
        <Table position={[-2.9, 0, -9]}/>
        <Book position={[-2.8, 0.52, -8.7]}/>
        <Kalimba position={[ -2.8, 0.52, -9.4 ]}/>
        <Laptop position={[-2.8, 0.52, -9.1]}/>




        <LightToSkills/>
        <TextSkills />



        
        <Ceiling position={[0, 2.6, -3]} type={"Static"}/>
        <FrontWall position={[-0.9, 0, -13.5]}/>
        <RightWall position={[3.5, 1, -3]} type={"Static"}/>
        <LeftWall position={[-3.5, 1, -3]} type={"Static"} />
        <BackWall position={[0, 1, 7]} type={"Static"} />
        <VanillaDate/>
     
        <group position={[3.2, 0, -1]}>
          <Stereo position={[0, 0, 0]}/>
          {/* <PositionalAudio autoplay loop url={music} distance={2} /> */}
        </group>
     
     <Chair position={[-2, 0, -8]}/>
     <Chair position={[-2.3, 0, -9.6]} rotation={[0, Math.PI / 3, 0]} />

{/* 
     <Html rotation={[Math.PI / 2, 0, 0]} transform >
          <button onClick={()=> {console.log("działa!!!!")}}>Click Me</button>
     </Html> */}

     <MovingSpotLights/>
    <WhiteBlackMe rotation={[0, Math.PI / 1.7, 0]} position={[-2.8, 0, 4.9]}/>
    <Door position={[-2.6, 0, 6.95]}/>

<TextWhereWhoAmI/>
<LightToWhoAmI/>

<LightToWhatCanIDo/>
<TextWhatCanIDo/>


      <LightToWhereAreWe/>
    <TextWhereAreWe/>



        <Ground/>
      </Physics>
      <PointerLockControls />
    </Canvas>
    
    </>
  )
}
