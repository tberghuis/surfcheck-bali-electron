import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import ReactPlayer from 'react-player';
import icon from '../../assets/icon.svg';
import './App.css';

const Hello = () => {
  return (
    <div>
      <ReactPlayer
        playing
        muted
        url="https://cams.cdn-surfline.com/cdn-au/au-lennoxhead/playlist.m3u8"
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
