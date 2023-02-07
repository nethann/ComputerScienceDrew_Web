import React, { Suspense } from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';

//modules import
import Typewriter from 'typewriter-effect';

//CSS import 
import "./Home-CSS/Computer.css"

//model import 
import VintageComputer from "./VintageComputer";

export default function Computer() {
    return (
        <div className='Model-div'>
            <div className='Model-holder'>
                <Canvas camera={{ fov: 1, position: [5, 0, 50] }} >


                    <Suspense fallback={null}>
                        <Stage>
                            <VintageComputer />
                            <OrbitControls autoRotate enableZoom={false} />

                        </Stage>
                    </Suspense>

                </Canvas>
            </div>
            <div className='bar'>
                <p className='Title'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Computer Science.')
                                .start();
                        }}
                    />
                </p>
            </div>
        </div>
    )
}
