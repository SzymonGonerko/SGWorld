import { Vector3 } from 'three'
import { useRef } from 'react'
import {useFrame} from '@react-three/fiber'
import {SpotLight} from '@react-three/drei'



const LightToWhoAmI = ({ vec = new Vector3() }) => {
    const light = useRef()
    useFrame(() => {
      light.current.target.position.lerp(vec.set(3.99, 1.2, 1), 0.1)
      light.current.target.updateMatrixWorld()
    })
    return <SpotLight position={[0, 2.6, -2]}  ref={light} penumbra={1} distance={8} angle={0.3} attenuation={0} anglePower={2} intensity={0.6} />
  }

  export default LightToWhoAmI