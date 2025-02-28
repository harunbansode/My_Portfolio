import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import HackerRoom from "../components/HackerRoom";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
// import Rings from "../components/Rings";
import PythonPL from "../components/PythonPL";
// import {Leva, useControls} from "leva";
import { useMediaQuery } from "react-responsive";
import Target from "../components/Target";
import { calculateSizes } from "../constants";
import HeroCamera from "../components/HeroCamera";


const Hero = () => {
    // const x = useControls('HackerRoom', {
    //     PositionX : {
    //         value: 2.5,
    //         min : -10,
    //         max: 10
    //     },
    //     PositionY : {
    //         value: 2.5,
    //         min : -10,
    //         max: 10
    //     },
    //     PositionZ : {
    //         value: 2.5,
    //         min : -10,
    //         max: 10
    //     },
    //     RotationX : {
    //         value: 0,
    //         min : -10,
    //         max: 10
    //     },
    //     RotationY : {
    //         value: 0,
    //         min : -10,
    //         max: 10
    //     },
    //     RotationZ : {
    //         value: 0,
    //         min : -10,
    //         max: 10
    //     },
    //     scale: {
    //         value: 1,
    //         min: 0.1,
    //         max: 10
    //     }
    // })
    const isMobile = useMediaQuery({ maxWidth: 768  });
    const isSmall = useMediaQuery({ maxWidth: 480  });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024  });
    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    const reactLogoPos = isSmall 
    ? [4, 3, 0] 
    : isMobile 
    ? [7, 4.5, 0] 
    : isTablet 
    ? [8.5, 5, 0] 
    : [9.5, 5.7, 0];

    const pyPosition =  isSmall 
    ? [-5, 7, 0] 
    : isMobile ? [-10, 10, 0] 
    : isTablet ? [-12, 10, 0] 
    : [-9.5, 5.7, 0];

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className=" w-full mx-auto flex flex-col sm:mt-36 mt-20 sm:px-10 px-5 gap-3">
                <p className="sm:text-3xl text-2xl text-white text-center font-mono font-extrabold"> Hi, I'm Harun Bansode <span className="waving-hand"> 👋 </span></p>
            </div>
            <div className="w-full h-full absolute inset-0">
                {/* <Leva /> */}
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                    <HeroCamera>
                    <HackerRoom
                        // scale={0.1} 
                        // position={[-2, 8, 2]} 
                        // rotation={[0, -Math.PI, 0]}
                        // position={[1.3, -8.9, 1.9]} 
                        position={sizes.deskPosition} 
                        // rotation = {[-9.3, -6.4, -9.4]}
                        rotation = {[0, -Math.PI, 0]}
                        // scale={[0.1, 0.1, 0.1]} 
                        // scale={isMobile ? 0.07 : 0.1} 
                        scale={sizes.deskScale} 
                        />
                    </HeroCamera>
                    <group>
                        <Target position={sizes.targetPosition} />
                        <ReactLogo position={reactLogoPos}/>
                        <Cube position={sizes.cubePosition}/>
                        {/* <Rings position={sizes.ringPosition}/> */}
                        <PythonPL position={pyPosition}/>
                    </group>
                    <ambientLight intensity={1}/>
                    <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>

                </Canvas>
            </div>
        </section>
    )
}

export default Hero