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
        let time = Date.now() * 5
        let positionX = Math.sin( time * 0.0007 ) + 1;
        let positionY = Math.cos( time * 0.0005 ) * 1;
        let positionZ = Math.cos( time * 0.0003 ) * 0.5;

        light.current.position.x = positionX
        // light.current.position.y = positionY
        // light.current.position.z = positionZ


    })
    return (
    
    <Sphere ref={light} position={[1, 1, 1]} args={[0.04, 16, 200]}>
      <pointLight castShadow color="red" intensity={0.008} position={[0, 0, 0]} />
      <MeshWobbleMaterial
        attach="material"
        color="red"
        emissive="red"
        factor={5} // Strength, 0 disables the effect (default=1)
        speed={0} // Speed (default=1)
        roughness={0}
      />
  </Sphere>)
    
    
    
    // <SpotLight position={[0, 0, 0]}  ref={light} penumbra={1} distance={6} angle={0.30} attenuation={0.8} anglePower={2} intensity={1} />
  }

  export default MovingPointLight