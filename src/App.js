import { Canvas } from "@react-three/fiber"
import { Stars, PointerLockControls } from "@react-three/drei"
import { Physics } from "@react-three/cannon"
import { Ground } from "./meshes/Ground"
import { Player } from "./meshes/Player"
import { SpotLight} from "@react-three/drei"


import {BackWall} from "./meshes/BackWall"
import {LeftWall} from "./meshes/LeftWall"
import {RightWall} from "./meshes/RightWall"
import {Ceiling} from "./meshes/Ceiling"
import { TextSkills } from "./meshes/TextSkills"

import LightToTable from "../src/lights/LightToTable"
import LightToPaint from "../src/lights/LightToPaint"
import LightToSkills from "../src/lights/LightToSkills"

import MovingPointLight from "./lights/MovingPointLight"
import { TV } from "../src/meshes/TV"

import {
  MeshWobbleMaterial,
  Sphere
} from "@react-three/drei";


import Paint from "./gltfjsx/Paint"
import FrontWall from "./gltfjsx/FrontWall"
import Table from "./gltfjsx/Table"


export default function App() {
  return (
    <Canvas shadows gl={{ alpha: false }} camera={{ fov: 45 }}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <color attach="background" args={['#040811']} />
      {/* <ambientLight intensity={0.1} /> */}


      <pointLight castShadow intensity={0.2} position={[0, 1, -1]} />
      <Physics gravity={[0, -30, 0]}>
        <Ground />
        <Player />

        <LightToPaint/>
        <Paint />
        
        
        <MovingPointLight/>

      <LightToTable/>
      <Table position={[-3, 0, -7]}/>

        <LightToSkills/>
        <TextSkills />

        
        <Ceiling position={[0, 2.6, -3]} type={"Static"}/>
        <FrontWall position={[-0.9, 0, -13.5]}/>
        <RightWall position={[3.5, 1, -3]} type={"Static"}/>
        <LeftWall position={[-3.5, 1, -3]} type={"Static"} />
        <BackWall position={[0, 1, 7]} type={"Static"} />
        <TV/>
     
      

      </Physics>
      <PointerLockControls />
    </Canvas>
  )
}
