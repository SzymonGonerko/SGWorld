import React, {useState, useEffect, Suspense} from "react";
import { Canvas } from "@react-three/fiber"
import { Stars, PointerLockControls } from "@react-three/drei"
import { Physics } from "@react-three/cannon"
import { Ground } from "./meshes/Ground"
import { Player } from "./meshes/Player"
import { PositionalAudio } from "@react-three/drei"


import Loader from './Loader'


import { BackWall } from "./meshes/BackWall"
import { Glass } from "./meshes/Glass"
import { LeftWall } from "./meshes/LeftWall"
import { RightWall } from "./meshes/RightWall"
import { Ceiling } from "./meshes/Ceiling"
import { TextSkills } from "./meshes/TextSkills"
import { TextFavouriteThings } from './meshes/TextFavouriteThings'
import { TextWhereAreWe } from "./meshes/TextWhereAreWe";
import { TextWhereWhoAmI } from "./meshes/TextWhoAmI"
import { TextWhatCanIDo } from "./meshes/TextWhatCanIDo";
import { TextGreatPossibility } from "./meshes/TextGreatPossibility";
import { TextContactWithMe } from "./meshes/TextContactWithMe";
import { TextPaint } from "./meshes/TextPaint"
import { TextLicences } from "./meshes/TextLicences";
import { TextSGWorld } from "./meshes/TextSGWorld"
import { TextLightGarden } from "./meshes/TextLightGarden"
import { FancyMesh } from "./meshes/FancyMesh"
import { TextPhoto } from "./meshes/TextPhoto";


import LightToPhoto from "./lights/LightToPhoto";
import LightsToFavourite from "../src/lights/LightsToFavourite"
import LightToPaint from "../src/lights/LightToPaint"
import LightToSkills from "../src/lights/LightToSkills"
import LightToWhereAreWe from "./lights/LightToWhereAreWe";
import LightToWhoAmI from "./lights/LightToWhoAmI";
import LightToWhatCanIDo from "./lights/LightToWhatCanIDo";
import LightToGreatPossibility from "./lights/LightToGreatPossibility"
import LightToContactWithMe from "./lights/LightToContact";
import SpotLightInGarden from "./lights/SpotLightInGarden";

import music from "../src/sounds/FKJ.mp3"

import MovingSpotLights from "./lights/MovingSpotLights"
import { VanillaDate } from "./meshes/VanillaDate"



import {Sphere} from "@react-three/drei";


import Paint from "./gltfjsx/Paint"
import FrontWindows from "./gltfjsx/FrontWindows"
import Stereo from "./gltfjsx/Stereo"
import Tree from "./gltfjsx/Tree"
import MyPhoto from "./gltfjsx/MyPhoto"
import WhiteBlackMe from "./gltfjsx/WhiteBlackMe"





export default function App() {
  return (
    <>
    <Loader/>


    <Canvas shadows gl={{ alpha: false }} camera={{ fov: 45 }}>
    <Suspense fallback={null}>
        <group position={[3.2, 0, 2.5]}>
          <Stereo position={[0, 0, 0]}/>
          <PositionalAudio autoplay loop url={music} distance={2} />
        </group>


      <Stars radius={100} depth={50} count={5000} factor={4} saturation={1} fade speed={1} />
      <color attach="background" args={['#040811']} />
      <pointLight color={"#fffef7"} castShadow intensity={0.23} position={[0, 1.8, -5]} />
      <Physics gravity={[0, -30, 0]}>
        
        <Player />

      <MyPhoto position={[-0.7, 1, 6.9]}/>
      <TextPhoto/>
      <LightToPhoto/>

        <LightToPaint/>
        <Paint />
        <TextPaint/>

        <LightToGreatPossibility/>
        <TextGreatPossibility/>


        <LightToContactWithMe/>
        <TextContactWithMe/>
        

        <LightsToFavourite/>
        <TextFavouriteThings/>



        <LightToSkills/>
        <TextSkills />



        
        <Ceiling position={[0, 2.6, -3]} type={"Static"}/>
        <FrontWindows position={[0.45, 0, -13.5]}/>

        <Glass position={[-2.6, 1.24, -13.45]} type={"Static"}/>
        <Glass position={[-0.87, 1.24, -13.45]} type={"Static"}/>
        <Glass position={[2.58, 1.24, -13.45]} type={"Static"}/>
        <RightWall position={[3.5, 1, -3]} type={"Static"}/>
        <LeftWall position={[-3.5, 1, -3]} type={"Static"} />
        <BackWall position={[0, 1, 7]} type={"Static"} />
        <VanillaDate/>
     

     

     <MovingSpotLights/>
    <WhiteBlackMe rotation={[0, Math.PI / 1.7, 0]} position={[-2.79, 0, 4.9]}/>


    <TextWhereWhoAmI/>
    <LightToWhoAmI/>

    <LightToWhatCanIDo/>
    <TextWhatCanIDo/>


    <LightToWhereAreWe/>
    <TextWhereAreWe/>
    <TextLicences/>

{/*  ----------------GARDEN---------------- */}

        <TextSGWorld/>
        <TextLightGarden/>

        <Tree position={[4, -2, -23]}/>


        <SpotLightInGarden color={"red"} objectPosition={["2.7", "3", "-23"]} lightPos={["2.3", "1.2", "-23"]} />
        <Sphere visible position={[2.3, 1.7, -23]} args={[0.3, 16, 200]}>
          <FancyMesh color={"red"}/>
        </Sphere>

        <SpotLightInGarden color={"blue"} objectPosition={["2", "4", "-27"]} lightPos={["2", "3", "-27"]} />
        <Sphere visible position={[2, 4, -27]} args={[0.3, 16, 200]}>
          <FancyMesh color={"blue"}/>
        </Sphere>




      <Ground/>
      </Physics>
      <PointerLockControls />
      </Suspense>
    </Canvas>
    </>
  )
}
