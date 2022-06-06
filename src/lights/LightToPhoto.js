import { Vector3 } from 'three'
import { useRef } from 'react'
import {useFrame, useThree} from '@react-three/fiber'
import {SpotLight} from '@react-three/drei'



const LightToPhoto = ({ vec = new Vector3() }) => {
    const light = useRef()
    useFrame(() => {
      light.current.target.position.lerp(vec.set(-0.7, 1, 6.89), 0.1)
      light.current.target.updateMatrixWorld()
    })
    return <SpotLight position={[1, 2.6, 4.9]}  ref={light} penumbra={1} distance={6} angle={0.25} attenuation={1} anglePower={2} intensity={1} />
  }

  export default LightToPhoto