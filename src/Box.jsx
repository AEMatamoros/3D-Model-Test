import React from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from '@react-three/fiber'
import Toreto from "../src/assets/img/toreto.jpg"
export default function Box() {
  const result = useLoader(TextureLoader, Toreto)
  return (
    <mesh rotation={[90,0,20]}>
        <boxGeometry args={[3, 3, 3]} />
        {/* Solo Utilizar uno de ellos */}
        <meshNormalMaterial attach="material"/>
        {/* <meshStandardMaterial map={result}/> */}
    </mesh>
  );
}