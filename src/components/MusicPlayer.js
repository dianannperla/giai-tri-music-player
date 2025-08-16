import React, { useContext } from 'react';
import { MusicContext } from '../context/MusicContext';

const MusicPlayer = () => {
  const { currentSong, isPlaying, playSong, pauseSong, resumeSong } = useContext(MusicContext);

  return (
    <div>
      <h2>Player</h2>
      {currentSong ? <p>Đang phát: {currentSong}</p> : <p>Chưa có bài hát nào được chọn.</p>}
      <button onClick={() => playSong('Bài hát mới')}>Phát</button>
      <button onClick={isPlaying ? pauseSong : resumeSong}>{isPlaying ? 'Dừng' : 'Tiếp tục'}</button>
    </div>
  );
};

export default MusicPlayer;
