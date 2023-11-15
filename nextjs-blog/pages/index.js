import { Canvas } from 'react-three-fiber';
import Tubelight from './Tubelight';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        <Tubelight position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default Home;
