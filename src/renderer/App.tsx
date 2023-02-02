import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import ReactPlayer from 'react-player';
import icon from '../../assets/icon.svg';
import './App.css';
import CamDemo from "./components/CamDemo";
import CamList from "./components/CamList";



// https://cams.cdn-surfline.com/cdn-int/id-kuta/playlist.m3u8?accessToken=1f3c332b82712f0d01aa00abec66c0f94f475fc3

const Hello = () => {
  return (
    <div>
      <ReactPlayer
        playing
        muted
        url="https://cams.cdn-surfline.com/cdn-int/id-kuta/playlist.m3u8"
      />
    </div>
  );
};

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Hello />} />
//       </Routes>
//     </Router>
//   );
// }

export default function App() {
  return (
    <div className="app">
      <CamList></CamList>
      <CamDemo></CamDemo>
    </div>
  );
}