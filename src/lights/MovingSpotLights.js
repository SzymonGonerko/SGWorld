import { Vector3 } from 'three'
import { useRef } from 'react'
import {useFrame, useThree} from '@react-three/fiber'
import {SpotLight, light} from '@react-three/drei'


import {
  MeshWobbleMaterial,
  Sphere
} from "@react-three/drei";


const MovingSpotLights = ({ vec = new Vector3() }) => {

    const firstSphere = useRef()
    const secondSphere = useRef()

    const firstLight = useRef()
    const secondLight = useRef()

    useFrame(() => {
      firstLight.current.target.position.lerp(vec.set(-2.75, 1, 4.9), 0.1)
      firstLight.current.target.updateMatrixWorld()

      secondLight.current.target.position.lerp(vec.set(-2.75, 1, 5.2), 0.1)
      secondLight.current.target.updateMatrixWorld()


        let time = Date.now() * 20

        let positionX = (Math.sin( time * 0.00007 ) /8) -2.5;
        let positionY = -(Math.cos( time * 0.00007)/ 8)+ 1;
        let positionZ = (Math.cos( time * 0.00007)/ 8) + 5.1;
    
        firstSphere.current.position.x = positionX
        firstSphere.current.position.y = positionY
        firstSphere.current.position.z = positionZ

        secondSphere.current.position.x = positionX - 0.1
        secondSphere.current.position.y = positionY
        secondSphere.current.position.z = positionZ - 0.5
          


    })
    return (
    <>
    <Sphere ref={firstSphere} position={[-2.8, 1.15, 5.1]} args={[0.009, 16, 200]}>
      <SpotLight ref={firstLight} color="#ff8b8b" position={[0, 0, 0]} penumbra={1} distance={6} angle={0.40} attenuation={0.1} anglePower={2} intensity={0.5} />
      <MeshWobbleMaterial
        attach="material"
        color="#ff8b8b"
        emissive="#ff8b8b"
        factor={5}
        speed={0}
        roughness={0}
      />
  </Sphere>

  <Sphere ref={secondSphere} position={[-2.8, 1.15, 5.1]} args={[0.009, 16, 200]}>
      <SpotLight ref={secondLight} color="lightblue" position={[0, 0, 0]} penumbra={1} distance={6} angle={0.40} attenuation={0.1} anglePower={2} intensity={0.5} />
      <MeshWobbleMaterial
        attach="material"
        color="lightblue"
        emissive="lightblue"
        factor={5}
        speed={0}
        roughness={0}
      />
  </Sphere>
  
  </>)
  }

  export default MovingSpotLights