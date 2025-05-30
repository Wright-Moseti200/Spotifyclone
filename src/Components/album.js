import React, { useState, useEffect } from 'react'
import "./album.css";
import { useParams, useOutletContext } from 'react-router-dom';
import { albumsData, songsData, assets } from '../Assets/assets';

const Album = () => {
  const [albumInfo, setAlbumInfo] = useState(null);
  const [currentIndex, setCurrentIndex] = useOutletContext();
  const { albumid } = useParams();

  useEffect(() => {
    const album = albumsData.find(element => element.id === Number(albumid));
    setAlbumInfo(album);
  }, [albumid]);

  if (!albumInfo) return null;

  return (
    <div className='album-title'>
      <div style={{ display: "flex", gap: "24px", padding: "20px 0" }}>
        <img 
          src={albumInfo.image} 
          style={{
            height: "232px",
            width: "232px",
            borderRadius: "8px",
            boxShadow: "0 4px 60px rgba(0,0,0,.5)"
          }} 
          alt=''
        />
        <div className='album-info'>
          <p>Playlist</p>
          <h1 style={{ fontSize: "60px", fontWeight: "bold" }}>{albumInfo.name}</h1>
          <p>{albumInfo.desc}</p>
          <div className="metadata">
            <img style={{ height: "24px" }} src={assets.spotify_logo} alt='' />
            <p style={{ fontWeight: "bold" }}>Spotify</p>
            <p>1,323,154 likes</p>
            <p style={{ fontWeight: "bold" }}>50 songs,</p>
            <p>about 2hr 30min</p>
          </div>
        </div>
      </div>

      <div className='songinfo'>
        <p><span>#</span> Title</p>
        <p>Album</p>
        <p>Date Added</p>
        <img src={assets.clock_icon} alt='' />
      </div>

      <div>
        {songsData.map((song, index) => (
          <div 
            key={index}
            className='songdata'
            onClick={() => setCurrentIndex(index)}
          >
            <div className="song-title">
              <p>{index + 1}</p>
              <img src={song.image} alt='' />
              <p>{song.name}</p>
            </div>
            <div>{albumInfo.name}</div>
            <div>5 days ago</div>
            <div>{song.duration}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Album;
