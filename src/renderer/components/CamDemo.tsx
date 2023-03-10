import { useStore } from '../store';
import ReactPlayer from 'react-player';

function CamDemo() {
  const currentCam = useStore((state) => state.currentCam);

  return (
    <div>
      <div>
        {currentCam.name} {currentCam.url}
      </div>
      <ReactPlayer width="100%" height="auto" playing muted url={currentCam.url} />
    </div>
  );
}

export default CamDemo;
