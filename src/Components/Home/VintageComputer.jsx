

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/VintageComputer.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.23, -0.09]} rotation={[Math.PI / 2, 0, 0]} scale={[1.01, 0.67, 0.83]}>
        <mesh geometry={nodes.Cube004.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube004_1.geometry} material={materials['Material.030']} />
      </group>
      <mesh geometry={nodes.Computer_Square_Button.geometry} material={materials['Material.023']} position={[0.74, 0.65, 0.58]} scale={[0.07, 0.09, 0.02]} />
      <mesh geometry={nodes.Regular_Button_1_.geometry} material={materials['Material.021']} position={[0.75, 0.08, 0.57]} rotation={[Math.PI / 2, 0, 0]} scale={[0.05, 0.02, 0.05]} />
      <mesh geometry={nodes.Regular_Button_2_.geometry} material={materials['Material.020']} position={[0.75, -0.04, 0.57]} rotation={[Math.PI / 2, 0, 0]} scale={[0.05, 0.02, 0.05]} />
      <mesh geometry={nodes.Regular_Button_3.geometry} material={materials['Material.019']} position={[0.75, -0.17, 0.57]} rotation={[Math.PI / 2, 0, 0]} scale={[0.05, 0.02, 0.05]} />
      <group position={[0, -1.04, 0]} scale={[1.3, 0.37, 1]}>
        <mesh geometry={nodes.Cube008.geometry} material={materials.Regular} />
        <mesh geometry={nodes.Cube008_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Cube008_2.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cube008_3.geometry} material={materials['Material.018']} />
      </group>
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.009']} position={[0.03, -0.83, 0.92]} scale={[0.35, 0.04, 0.02]} />
      <mesh geometry={nodes.Icosphere.geometry} material={materials['Material.011']} position={[-0.24, -0.84, 0.94]} scale={0.01} />
      <mesh geometry={nodes.Icosphere001.geometry} material={materials['Material.010']} position={[-0.27, -0.84, 0.94]} scale={0.01} />
      <mesh geometry={nodes.Icosphere002.geometry} material={materials['Material.012']} position={[-0.21, -0.84, 0.94]} scale={0.01} />
      <mesh geometry={nodes.Icosphere003.geometry} material={materials['Material.013']} position={[0.23, -0.83, 0.94]} scale={[0.03, 0.03, 0.01]} />
      <mesh geometry={nodes.Icosphere004.geometry} material={materials['Material.014']} position={[0.31, -0.83, 0.94]} scale={[0.03, 0.03, 0.01]} />
      <mesh geometry={nodes.Icosphere005.geometry} material={materials['Material.022']} position={[0.74, 0.22, 0.57]} scale={[0.03, 0.03, 0.01]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Material.007']} position={[-1.08, -0.91, 0.98]} scale={[0.09, 0.09, 0.03]} />
      <mesh geometry={nodes.Icosphere007.geometry} material={materials['Material.006']} position={[-1.07, -0.9, 0.99]} scale={[0.08, 0.08, -0.04]} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.015']} position={[0.79, -1.02, 0.97]} rotation={[Math.PI / 2, 0, 0]} scale={[0.19, -0.06, 0.19]} />
      <mesh geometry={nodes.back_source_more_cooler.geometry} material={materials['Material.016']} position={[0.04, -0.88, -0.89]} scale={[0.44, 0.18, 0.1]} />
      <mesh geometry={nodes.long_USB_cable_circle.geometry} material={nodes.long_USB_cable_circle.material} position={[0.26, -1.16, -0.94]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.holes_for_long_circle.geometry} material={nodes.holes_for_long_circle.material} position={[0.26, -1.16, -0.93]} scale={0} />
      <mesh geometry={nodes.holes_for_long_circle001.geometry} material={nodes.holes_for_long_circle001.material} position={[0.01, -1.16, -0.93]} scale={0} />
      <mesh geometry={nodes.long_USB_cable_circle001.geometry} material={nodes.long_USB_cable_circle001.material} position={[0.01, -1.16, -0.94]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.extension_HDMI_ports.geometry} material={materials['Material.004']} position={[0.07, -0.46, -0.76]} scale={[0.08, 0.02, 0.01]} />
      <mesh geometry={nodes.HDMI_Wire_Holder001.geometry} material={materials['Material.005']} position={[0.07, -0.47, -0.87]} rotation={[Math.PI / 2, 0, 0]} scale={0.02} />
      <mesh geometry={nodes.BezierCurve.geometry} material={materials['Material.029']} position={[0.19, -0.82, -1.03]} rotation={[0, 0, -Math.PI / 2]} scale={[0.39, 1, 1]} />
      <mesh geometry={nodes.extension_holes_for_extended_back_source003.geometry} material={materials['Material.002']} position={[0.09, -1.26, -0.94]} scale={[0.08, 0.02, 0.01]} />
      <mesh geometry={nodes.HDMI_Wire_Holder002.geometry} material={materials['Material.003']} position={[0.09, -1.26, -1.06]} rotation={[Math.PI / 2, 0, 0]} scale={0.02} />
      <mesh geometry={nodes.HDMI_Wire_Holder003.geometry} material={materials['Material.008']} position={[0.92, -1.2, -0.95]} rotation={[Math.PI / 2, 0, 0]} scale={[0.02, 0.03, 0.02]} />
      <group position={[1.63, -1.35, 1.61]} rotation={[Math.PI, -0.74, Math.PI]} scale={[0.14, 0.07, 0.17]}>
        <mesh geometry={nodes.Cube012.geometry} material={materials['Regular.001']} />
        <mesh geometry={nodes.Cube012_1.geometry} material={materials['Material.026']} />
      </group>
      <mesh geometry={nodes.extension_holes_for_extended_back_source008.geometry} material={materials['Material.025']} position={[1.45, -1.32, 1.5]} rotation={[3.14, -0.74, 3.14]} scale={[0.04, 0, 0.06]} />
      <mesh geometry={nodes.extension_holes_for_extended_back_source009.geometry} material={materials['Material.024']} position={[1.53, -1.32, 1.42]} rotation={[3.14, -0.74, 3.14]} scale={[0.04, 0, 0.06]} />
      <mesh geometry={nodes.mouse_hole_001.geometry} material={nodes.mouse_hole_001.material} position={[1.41, -1.37, 1.37]} rotation={[Math.PI, -0.74, Math.PI]} scale={[-0.01, -0.01, 0.02]} />
      <mesh geometry={nodes.HDMI_Wire_Holder004.geometry} material={materials['Material.027']} position={[1.4, -1.37, 1.36]} rotation={[Math.PI / 2, 0, -0.73]} scale={[0.02, 0.04, 0.02]} />
      <mesh geometry={nodes.NurbsCurve.geometry} material={materials['Material.028']} position={[1.85, -1.14, -0.4]} scale={0.99} />
      <mesh geometry={nodes['eagle-24601_960_720'].geometry} material={materials['eagle-24601_960_720']} position={[-0.14, 0.26, 0.55]} rotation={[Math.PI / 2, 0, 0]} scale={[0.67, 1, 1]} />
    </group>
  )
}

useGLTF.preload('/VintageComputer.glb')