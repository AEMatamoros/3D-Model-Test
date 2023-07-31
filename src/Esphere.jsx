import React from 'react'

export default function Esphere() {
    return (
        <mesh visible userData={{ hello: 'world' }}  rotation={[Math.PI / 2, 0, 0]}>
            <sphereGeometry args={[1]} />
            <meshStandardMaterial color="hotpink" transparent />
            {/* <meshNormalMaterial attach="material"/> */}
        </mesh>
    )
}
