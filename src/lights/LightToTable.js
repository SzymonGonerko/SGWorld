import { Vector3 } from 'three'
import { useRef } from 'react'
import {useFrame, useThree} from '@react-three/fiber'
import {SpotLight} from '@react-three/drei'



const LightToTable = ({ vec = new Vector3() }) => {
    const LightToTable = useRef()
    useFrame(() => {
      LightToTable.current.target.position.lerp(vec.set(-3, 0.8, -7), 0.1)
      LightToTable.current.target.updateMatrixWorld()
    })
    return <SpotLight position={[0, 2.6, -7]}  ref={LightToTable} penumbra={0.5} distance={6} angle={0.25} attenuation={0.8} anglePower={2} intensity={1} />
  }

  export default LightToTable