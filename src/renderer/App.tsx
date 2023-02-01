import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import ReactPlayer from 'react-player';
import icon from '../../assets/icon.svg';
import './App.css';



// https://cams.cdn-surfline.com/cdn-int/id-kuta/playlist.m3u8?accessToken=1f3c332b82712f0d01aa00abec66c0f94f475fc3

const Hello = () => {
  return (
    <div>
      <ReactPlayer
        playing
        muted
        url="https://cams.cdn-surfline.com/cdn-int/id-kuta/playlist.m3u8"
      />
      {/* 
      <ReactPlayer
        playing
        muted
        className="react-player"
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width="100%"
        height="100%"
      /> */}
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
