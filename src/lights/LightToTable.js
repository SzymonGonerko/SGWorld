import { Vector3 } from 'three'
import { useRef } from 'react'
import {useFrame, useThree} from '@react-three/fiber'
import {SpotLight} from '@react-three/drei'



const LightToTable = ({ vec = new Vector3() }) => {
    const light = useRef()
    useFrame(() => {
      light.current.target.position.lerp(vec.set(-3, 1.6, -1.9), 0.1)
      light.current.target.updateMatrixWorld()
    })
    return <SpotLight position={[0, 2.6, -7]}  ref={light} penumbra={1} distance={6} angle={0.20} attenuation={0.8} anglePower={2} intensity={1} />
  }

  export default LightToTable