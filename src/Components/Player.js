import React, { useState, useRef, useEffect } from 'react'
import "./player.css";
import {songsData} from "../Assets/assets";
import shufflepng from "../Assets/shuffle.png";
import nextpng from "../Assets/next.png";
import prevpng from "../Assets/prev.png";
import repeatpng from "../Assets/loop.png";
import playpng from "../Assets/play.png";
import pausePng from "../Assets/pause.png";
import playspng from "../Assets/plays.png";
import voicepng from "../Assets/mic.png";
import queuepng from "../Assets/queue.png";
import speakerpng from "../Assets/speaker.png";
import volumepng from "../Assets/volume.png";
import miniplayer from "../Assets/mini-player.png";
import expandpng  from "../Assets/zoom.png";


const Player = (props) => {
  let [songs] = useState(songsData);
  let [playPause, setPlayPause] = useState(true);
  let [index, setIndex] = useState(props.index);
  let [currentTime, setCurrentTime] = useState(0);
  let [duration, setDuration] = useState(0);
  let rangeRef = useRef();
  let songRef = useRef();

  let song = songs[index];

  // Handle duration and metadata loading
  useEffect(() => {
    const handleLoadedMetadata = () => {
      if (songRef.current) {
        setDuration(songRef.current.duration);
        rangeRef.current.max = songRef.current.duration;
      }
    };

    if (songRef.current) {
      songRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
    }

    return () => {
      if (songRef.current) {
        songRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
      }
    };
  }, [song]);

  // Handle time updates
  useEffect(() => {
    const handleTimeUpdate = () => {
      if (songRef.current) {
        setCurrentTime(songRef.current.currentTime);
        rangeRef.current.value = songRef.current.currentTime;
      }
    };

    if (songRef.current) {
      songRef.current.addEventListener('timeupdate', handleTimeUpdate);
    }

    return () => {
      if (songRef.current) {
        songRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, [song]);

  // Handle manual seeking
  const handleSeek = (e) => {
    const time = Number(e.target.value);
    if (songRef.current) {
      songRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };


  const formatTime = (time) => {
    if (!time) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => 
    {
      setIndex(props.index);
    },[props.index]);


  useEffect(() => {
    if (songRef.current) {
      songRef.current.load();
    }
  }, [song]);

  useEffect(()=>{
    if(song){
      if(!playPause){
        songRef.current.play()
      }
    }
  },[props.index,song]);
  // Defensive: if song is undefined, render nothing or a fallback UI
  if (!song) return null;

  function playPausesong() {
    if (playPause) {
      songRef.current.play();
      setPlayPause(false);
    } else {
      songRef.current.pause();
      setPlayPause(true);
    }
  }

  async function next(){
    setIndex(index + 1);
    if (index >= songs.length - 1) {
      setIndex(0); // Loop back to the first song
    }
    if(!playPause){
    if(songRef.current){
     await songRef.current.load(); // Load the new song
     await songRef.current.play(); 
    }
  }
  }

  async function prev(){
    setIndex(index - 1);
    if (index <= 0) {
      setIndex(songs.length - 1); 
    }
    if(songRef.current){
    await  songRef.current.load();
    await  songRef.current.play(); 
    }
  }
  return (
    <div className='player'>
      <div className='player-items'>
        <div style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <img style={{ height: "55px" }} src={song.image} alt='' />
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <p>{song.name}</p>
            <p>Put a smile</p>
          </div>
        </div>
        <div className='music-controls' style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px"
        }}>
          <div style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <img style={{ height: "17px", width: "17px" }} src={shufflepng} alt="" />
            <img style={{ height: "17px", width: "17px" }} src={prevpng} onClick={prev} alt="" />
            <img style={{ height: "17px", width: "17px" }} src={playPause ? playpng : pausePng} alt="" onClick={playPausesong} />
            <img style={{ height: "17px", width: "17px" }} src={nextpng} onClick={next} alt="" />
            <img style={{ height: "17px", width: "17px" }} src={repeatpng} alt="" />
          </div>
          <div className='slider' style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <p>{formatTime(currentTime)}</p>
            <input 
              className='input-slider' 
              type="range"
              ref={rangeRef}
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleSeek}
              style={{ width: "500px" }} 
            />
            <p>{formatTime(duration)}</p>
          </div>
          <audio ref={songRef} hidden>
            <source src={song.file} />
          </audio>
        </div>
        <div style={{
          display: "flex",
          flexDirection: 'row',
          justifyContent: "center",
          alignItems: "center",
          gap: "10px"
        }}>
          <img style={{ height: "17px", width: "17px" }} src={playspng} alt='' />
          <img style={{ height: "17px", width: "17px" }} src={voicepng} alt='' />
          <img style={{ height: "17px", width: "17px" }} src={queuepng} alt='' />
          <img style={{ height: "17px", width: "17px" }} src={speakerpng} alt='' />
          <img style={{ height: "17px", width: "17px" }} src={volumepng} alt='' />
          <img style={{ height: "17px", width: "17px" }} src={miniplayer} alt='' />
          <img style={{ height: "17px", width: "17px" }} src={expandpng} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Player;
