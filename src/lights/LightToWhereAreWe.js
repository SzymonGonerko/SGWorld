import { Vector3 } from 'three'
import { useRef } from 'react'
import {useFrame} from '@react-three/fiber'
import {SpotLight} from '@react-three/drei'



const LightToWhereAreWe = ({ vec = new Vector3() }) => {
    const light = useRef()
    useFrame(() => {
      light.current.target.position.lerp(vec.set(3.1, 1.4, 3.9), 0.1)
      light.current.target.updateMatrixWorld()
    })
    return <SpotLight position={[0, 2.6, 0]}  ref={light} penumbra={1} distance={8} angle={0.26} attenuation={0.8} anglePower={2} intensity={1} />
  }

  export default LightToWhereAreWe