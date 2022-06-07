import { Vector3 } from 'three'
import { useRef } from 'react'
import {useFrame} from '@react-three/fiber'
import {SpotLight} from '@react-three/drei'



const LightToWhatCanIDo = ({ vec = new Vector3() }) => {
    const light = useRef()
    useFrame(() => {
      light.current.target.position.lerp(vec.set(3.36, 1.4, -2.3), 0.1)
      light.current.target.updateMatrixWorld()
    })
    return <SpotLight position={[0, 2.6, 0]}  ref={light} penumbra={1} distance={8} angle={0.28} attenuation={0} anglePower={0} intensity={1} />
  }

  export default LightToWhatCanIDo