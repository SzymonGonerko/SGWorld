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

import LightsToFavourite from "../src/lights/LightsToFavourite"
import LightToPaint from "../src/lights/LightToPaint"
import LightToSkills from "../src/lights/LightToSkills"

import music from "../src/sounds/SmellsLikeTeenSpirit.mp3"

import MovingPointLight from "./lights/MovingPointLight"
import { TV } from "../src/meshes/TV"

import {
  MeshWobbleMaterial,
  Sphere
} from "@react-three/drei";


import Paint from "./gltfjsx/Paint"
import FrontWall from "./gltfjsx/FrontWall"
import Kalimba from "./gltfjsx/Kalimba"
import Table from "./gltfjsx/Table"
import Book from "./gltfjsx/Book"
import Laptop from "./gltfjsx/Laptop"
import Stereo from "./gltfjsx/Stereo"


export default function App() {
  return (
    <Canvas shadows gl={{ alpha: false }} camera={{ fov: 45 }}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <color attach="background" args={['#040811']} />
      {/* <ambientLight intensity={0.1} /> */}


      <pointLight castShadow intensity={0.1} position={[0, 1, -5]} />
      <Physics gravity={[0, -30, 0]}>
        <Ground />
        <Player />

        <LightToPaint/>
        <Paint />
        
        
        {/* <MovingPointLight/> */}

        <LightsToFavourite/>
        <TextFavouriteThings/>
        <Table position={[-2.9, 0, -7]}/>
        <Book position={[-2.8, 0.52, -6.7]}/>
        <Kalimba position={[ -2.8, 0.52, -7.4 ]}/>
        <Laptop position={[-2.8, 0.52, -7.1]}/>

        <LightToSkills/>
        <TextSkills />



        
        <Ceiling position={[0, 2.6, -3]} type={"Static"}/>
        <FrontWall position={[-0.9, 0, -13.5]}/>
        <RightWall position={[3.5, 1, -3]} type={"Static"}/>
        <LeftWall position={[-3.5, 1, -3]} type={"Static"} />
        <BackWall position={[0, 1, 7]} type={"Static"} />
        <TV/>
     
        <group position={[3.2, 0, -2]}>
          <Stereo position={[0, 0, 0]}/>
          {/* <PositionalAudio autoplay loop url={music} distance={2} /> */}
        </group>
     
      

      </Physics>
      <PointerLockControls />
    </Canvas>
  )
}
