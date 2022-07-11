import { Vector3 } from 'three'
import { useRef } from 'react'
import {useFrame} from '@react-three/fiber'
import {SpotLight} from '@react-three/drei'



export const LightToSunset = ({ vec = new Vector3() }) => {
    const lightToSunset = useRef()
    useFrame(() => {
        lightToSunset.current.target.position.lerp(vec.set(-3, 1.35, -10), 0.1)
        lightToSunset.current.target.updateMatrixWorld()

    })
    return (
    <group position={[0, 1.4, -4.8]}>
      <SpotLight ref={lightToSunset} penumbra={0.5} distance={10} angle={0.22} attenuation={0} anglePower={0} intensity={0.7} />
    </group>)

  }
