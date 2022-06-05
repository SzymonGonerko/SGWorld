import React, {useState, useEffect, Suspense} from "react";
import { Canvas } from "@react-three/fiber"
import { Stars, PointerLockControls } from "@react-three/drei"
import { Physics } from "@react-three/cannon"
import { Ground } from "./meshes/Ground"
import { Player } from "./meshes/Player"
import { PositionalAudio } from "@react-three/drei"


import Loader from './Loader'


import { BackWall } from "./meshes/BackWall"
import { FrontWall } from "./meshes/FrontWall"
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
import { TextHelloWorld } from "./meshes/TextHelloWorld"
import { TextWelcomeInGarden } from "./meshes/TextWelcomeInGarden"
import { FancyMesh } from "./meshes/FancyMesh"
import { BridgeToHelloWorld } from "./meshes/BridgeToHelloWorld"
import { FloorInFrontOfHelloWorld } from "./meshes/FloorInFrontOfHelloWorld"

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
import Kalimba from "./gltfjsx/Kalimba"
import Table from "./gltfjsx/Table"
import Book from "./gltfjsx/Book"
import Laptop from "./gltfjsx/Laptop"
import Stereo from "./gltfjsx/Stereo"
import Chair from "./gltfjsx/Chair"
import Door from "./gltfjsx/Door"
import Tree from "./gltfjsx/Tree"

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

      <pointLight castShadow intensity={0.11} position={[0, 1, -5]} />
      <Physics gravity={[0, -30, 0]}>
        
        <Player />



        <LightToPaint/>
        <Paint />
        <TextPaint/>

        <LightToGreatPossibility/>
        <TextGreatPossibility/>


        <LightToContactWithMe/>
        <TextContactWithMe/>
        

        <LightsToFavourite/>
        <TextFavouriteThings/>
        <Table position={[-2.9, 0, -9]}/>
        <Book position={[-2.8, 0.52, -8.7]}/>
        <Kalimba position={[ -2.8, 0.52, -9.4 ]}/>
        <Laptop position={[-2.8, 0.52, -9.1]}/>



        <LightToSkills/>
        <TextSkills />



        
        <Ceiling position={[0, 2.6, -3]} type={"Static"}/>
        <FrontWindows position={[0.45, 0, -13.5]}/>

        <FrontWall position={[-2, 1.3, -13.65]} type={"Static"}/>
        <FrontWall position={[3.5, 1.3, -13.65]} type={"Static"}/>
        <RightWall position={[3.5, 1, -3]} type={"Static"}/>
        <LeftWall position={[-3.5, 1, -3]} type={"Static"} />
        <BackWall position={[0, 1, 7]} type={"Static"} />
        <VanillaDate/>
     

     
     <Chair position={[-2, 0, -8]}/>
     <Chair position={[-2.3, 0, -9.6]} rotation={[0, Math.PI / 3, 0]} />

     <MovingSpotLights/>
    <WhiteBlackMe rotation={[0, Math.PI / 1.7, 0]} position={[-2.8, 0, 4.9]}/>
    <Door position={[-2.6, 0, 6.95]}/>

    <TextWhereWhoAmI/>
    <LightToWhoAmI/>

    <LightToWhatCanIDo/>
    <TextWhatCanIDo/>


    <LightToWhereAreWe/>
    <TextWhereAreWe/>
    <TextLicences/>

{/*  ----------------GARDEN---------------- */}

        <TextHelloWorld/>
        <TextWelcomeInGarden/>

        <Tree position={[4, -2, -23]}/>
        <Tree position={[-3, -2, -23]}/>
        <Tree position={[1, 0, -30]}/>


        <SpotLightInGarden color={"red"} objectPosition={["2.7", "3", "-23"]} lightPos={["2.3", "1.2", "-23"]} />
        <Sphere visible position={[2.3, 1.7, -23]} args={[0.3, 16, 200]}>
          <FancyMesh color={"red"}/>
        </Sphere>

        <SpotLightInGarden color={"blue"} objectPosition={["2", "4", "-27"]} lightPos={["2", "3", "-27"]} />
        <Sphere visible position={[2, 4, -27]} args={[0.3, 16, 200]}>
          <FancyMesh color={"blue"}/>
        </Sphere>

        <SpotLightInGarden color={"green"} objectPosition={["1", "40", "-15"]} lightPos={["-3", "0.5", "-25"]} />
        <Sphere visible position={[-3, 3, -25]} args={[0.3, 16, 200]}>
          <FancyMesh color={"green"}/>
        </Sphere>

        <SpotLightInGarden color={"white"} objectPosition={["1", "40", "-15"]} lightPos={["-2", "12", "0"]} />
        <FloorInFrontOfHelloWorld position={[1.8, 11, -2]} type={"Static"}/>
        <BridgeToHelloWorld position={[-6, 4.5, -9]} type={"Static"}/>



      <Ground/>
      </Physics>
      <PointerLockControls />
      </Suspense>
    </Canvas>
    </>
  )
}
