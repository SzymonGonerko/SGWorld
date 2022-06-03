import { Vector3 } from 'three'
import { useRef } from 'react'
import {useFrame, useThree} from '@react-three/fiber'
import {SpotLight} from '@react-three/drei'



const LightsToFavourite = ({ vec = new Vector3() }) => {
    const LightToTable = useRef()
    useFrame(() => {
      LightToTable.current.target.position.lerp(vec.set(-3, 1.3, -9), 0.1)
      LightToTable.current.target.updateMatrixWorld()
    })
    return <group position={[0, 2.6, -9]}>
    <SpotLight position={[0, 0, 0]}   ref={LightToTable} penumbra={0.5} distance={6} angle={0.38} attenuation={0.8} anglePower={2} intensity={1} />
    </group>

  }

  export default LightsToFavourite