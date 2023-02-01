import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

const Hello = () => {
  return (
    <div>
      <video width="352" height="198" controls>
        <source
          src="https://cams.cdn-surfline.com/cdn-au/au-lennoxhead/playlist.m3u8"
          type="application/x-mpegURL"
        />
      </video>
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
