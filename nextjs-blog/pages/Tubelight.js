// ... (previous imports)

import { useRef, useEffect } from 'react';
import { useSpring, a } from 'react-spring';

const Tubelight = ({ position }) => {
  const tubeRef = useRef();

  const { color } = useSpring({
    loop: { reverse: true },
    from: { color: 'lightblue' },
    to: { color: 'blue' },
  });

  const { scale } = useSpring({
    loop: { reverse: true },
    from: { scale: 1 },
    to: { scale: 1.5 },
  });

  useEffect(() => {
    const tube = tubeRef.current;
    tube.rotation.x = Math.PI / 2;
  }, []);

  return (
    <a.mesh position={position} scale={scale}>
      <a.tubeGeometry ref={tubeRef} args={[0.5, 0.5, 2, 32]} />
      <a.meshBasicMaterial color={color} />
    </a.mesh>
  );
};

export default Tubelight;
