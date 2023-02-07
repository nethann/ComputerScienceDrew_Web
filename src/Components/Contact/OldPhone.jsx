

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/oldPhone.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.lambert1} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.lambert1} />
          <mesh geometry={nodes.defaultMaterial_2.geometry} material={materials.lambert1} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/oldPhone.glb')
