import { Vector3 } from 'three'
import { useRef } from 'react'
import {useFrame} from '@react-three/fiber'
import {SpotLight} from '@react-three/drei'



const LightToGreatPossibility = ({ vec = new Vector3() }) => {
    const light = useRef()
    useFrame(() => {
      light.current.target.position.lerp(vec.set(-3.36, 1.3, 2.4), 0.1)
      light.current.target.updateMatrixWorld()
    })
    return <SpotLight position={[0, 2.6, 0]}  ref={light} penumbra={1} distance={8} angle={0.34} attenuation={0.8} intensity={0.4} anglePower={0.4}/>
  }

  export default LightToGreatPossibility