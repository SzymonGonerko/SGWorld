import { Vector3 } from 'three'
import { useRef } from 'react'
import {useFrame, useThree} from '@react-three/fiber'
import {SpotLight, light} from '@react-three/drei'


import {
  MeshWobbleMaterial,
  Sphere
} from "@react-three/drei";


const MovingPointLight = ({ vec = new Vector3() }) => {
    const light = useRef()
    const viewport = useThree((state) => state.viewport)
    useFrame(() => {
        // let time = Date.now() * 20
        // let positionX = (Math.sin( time * 0.00007 ) /10) + 1;
        // let positionY = Math.cos( 0.000007 )+ 0.2;
        // let positionZ = Math.cos( time * 0.0007 ) + 1;
    
        // light.current.position.x = positionX
        // light.current.position.y = positionY
        // light.current.position.z = positionZ
          


    })
    return (
    
    <Sphere ref={light} position={[-2.8, 1.15, 5.3]} args={[0.009, 16, 200]}>
      <pointLight castShadow color="#ff8b8b" intensity={0.1} position={[0, 0, 0]} />
      <MeshWobbleMaterial
        attach="material"
        color="#ff8b8b"
        emissive="#ff8b8b"
        factor={5}
        speed={0}
        roughness={0}
      />
  </Sphere>)
    
    
    
    // <SpotLight position={[0, 0, 0]}  ref={light} penumbra={1} distance={6} angle={0.30} attenuation={0.8} anglePower={2} intensity={1} />
  }

  export default MovingPointLight