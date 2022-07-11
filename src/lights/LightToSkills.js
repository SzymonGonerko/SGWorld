import { Vector3 } from 'three'
import { useRef } from 'react'
import {useFrame} from '@react-three/fiber'
import {SpotLight} from '@react-three/drei'



const LightToSkills = ({ vec = new Vector3() }) => {
    const lightToTech = useRef()
    const lightToTools = useRef()
    const lighttToTitle = useRef()
    const lightToVanillaDate = useRef()
    useFrame(() => {
      lightToTech.current.target.position.lerp(vec.set(3.3, 1.3, -8), 0.1)
      lightToTech.current.target.updateMatrixWorld()

      lightToTools.current.target.position.lerp(vec.set(3.3, 1.7, -5), 0.1)
      lightToTools.current.target.updateMatrixWorld()

      lighttToTitle.current.target.position.lerp(vec.set(3.2, 2, -6.35), 0.1)
      lighttToTitle.current.target.updateMatrixWorld()

      lightToVanillaDate.current.target.position.lerp(vec.set(3.36, 1.3, -11), 0.1)
      lightToVanillaDate.current.target.updateMatrixWorld()
    })
    return <group position={[0, 2.6, -7]}>
      <SpotLight position={[0, 0, 0]}  ref={lightToTech} penumbra={1} distance={10} angle={0.30} attenuation={0} anglePower={0} intensity={0.5} />
      <SpotLight position={[0, 0, 0]}  ref={lightToTools} penumbra={1} distance={10} angle={0.15} attenuation={0} anglePower={0} intensity={0.5} />
      <SpotLight position={[0, 0, 0]}  ref={lighttToTitle} penumbra={1} distance={10} angle={0.15} attenuation={0} anglePower={0} intensity={0.5} />
      <SpotLight position={[0, 0, 0]}  ref={lightToVanillaDate} penumbra={1} distance={10} angle={0.25} attenuation={0} anglePower={0} intensity={0.6} />
    </group>
  }

  export default LightToSkills