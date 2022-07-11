import { Vector3 } from 'three'
import { useRef } from 'react'
import {useFrame} from '@react-three/fiber'
import {SpotLight} from '@react-three/drei'



const LightToPaint = ({ vec = new Vector3() }) => {
    const light = useRef()
    useFrame(() => {
      light.current.target.position.lerp(vec.set(-3, 1.6, -3.9), 0.1)
      light.current.target.updateMatrixWorld()
    })
    return <SpotLight position={[0, 2.6, -3]}  ref={light} penumbra={1} distance={6} angle={0.25} attenuation={0} anglePower={0} intensity={1} />
  }

  export default LightToPaint