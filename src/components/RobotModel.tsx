import * as THREE from 'three';
import { useRef, type JSX } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Robot(props: JSX.IntrinsicElements['group']) {
    const robotRef = useRef<THREE.Group>(null);
    const { scene } = useGLTF('/robot.glb');

    return (
        <primitive
            ref={robotRef}
            object={scene}
            scale={0.1}
            position={[0, -0.5, 0]}
            rotation={[0, Math.PI / 4, 0]} // Rotate 45 degrees to show computer at an angle
            {...props}
        />
    );
}