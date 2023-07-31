import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./Box";
import Esphere from "./Esphere";

import Scene from "./Scene";
export default function DCanvas() {
  const [index, setIndex] = useState(1);

  const handleAnimationValue = () => {
    if (index != 4) {
      setIndex(index + 1)
    } else {
      setIndex(1)
    }
  }

  return (<>
    {/* <div className="wrapper">
      <Canvas className='canvas' >
        <Suspense fallback={null}>
          <Box />
        </Suspense>
        <ambientLight intensity={1} /> //Light is a necessity to see the object
        <directionalLight position={[-2, 5, 2]} intensity={1} /> //This light changes the intensity from different axes
        <OrbitControls enableZoom={false} autoRotate={true} />
      </Canvas>
    </div>
    <div className="wrapper">
      <Canvas className='canvas' >
        <Suspense fallback={null}>
          <Esphere />
        </Suspense>
        <ambientLight intensity={1} /> //Light is a necessity to see the object
        <directionalLight position={[-2, 5, 2]} intensity={1} /> //This light changes the intensity from different axes
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div> */}
    <button onClick={handleAnimationValue} className="main-button">Cambiar Animacion</button>
    <div className="wrapper car__canvas">
      <Canvas className='canvas' >
        <Suspense fallback={null}>
          <Scene animationNumber={index} />
        </Suspense>
        <ambientLight intensity={1} /> //Light is a necessity to see the object
        <directionalLight position={[-2, 5, 2]} intensity={1} /> //This light changes the intensity from different axes
        <OrbitControls enableZoom={false} />
      </Canvas>
      {/* <div className="data__canvas">
        <h1 >Wallee 2.0</h1>
      </div> */}
    </div>
  </>
  )
}