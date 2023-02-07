
import React, { Suspense } from 'react';
import "./Contact-CSS/Contact.css"

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';

//modules import
import Typewriter from 'typewriter-effect';

//models import
import Oldphone from "./OldPhone";


export default function Phone() {
    return (
        <div className='Model-div'>
            <Canvas camera={{ fov: 1, position: [10, 20, 50] }} >


                <Suspense fallback={null}>
                    <Stage>
                        <Oldphone />
                        <OrbitControls autoRotate enableZoom={false} />

                    </Stage>
                </Suspense>

            </Canvas>
            <div className='bar'>
                <p className='Title'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Contact Teacher.')
                                .start();
                        }}
                    />
                </p>
            </div>
        </div>
    )
}
