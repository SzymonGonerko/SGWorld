import { Vector3 } from 'three'
import { useRef } from 'react'
import {useFrame, useThree} from '@react-three/fiber'
import {SpotLight} from '@react-three/drei'



const LightToContactWithMe = ({ vec = new Vector3() }) => {
    const light = useRef()
    useFrame(() => {
      light.current.target.position.lerp(vec.set(-3, 1.5, -1.5), 0.1)
      light.current.target.updateMatrixWorld()
    })
    return <SpotLight position={[0, 2.6, -3.5]}  ref={light} penumbra={1} distance={6} angle={0.3} attenuation={0} anglePower={0} intensity={1.2} />
  }

  export default LightToContactWithMe