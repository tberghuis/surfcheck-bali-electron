import { useStore } from '../store';

function CamDemo() {
  const currentCam = useStore((state) => state.currentCam);

  return (
    <div>
      <div>
        {currentCam.name} {currentCam.url}
      </div>
    </div>
  );
}

export default CamDemo;
