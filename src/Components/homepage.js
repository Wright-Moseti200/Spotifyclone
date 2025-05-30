/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./homepage.css";
import { albumsData, songsData } from '../Assets/assets';
import { Link, useOutletContext } from 'react-router-dom';

const Homepage = () => {
  let [albums] = useState(albumsData);
  let [songs] = useState(songsData);
  const [currentIndex, setCurrentIndex] = useOutletContext(); 

  return (
    <>
<h2>Featured Charts</h2>
<br/>
<div  style={{display:"flex",
  flexDirection:"row",
  justifyContent:"space-around",
  alignItems:"center",
  width:"75.5vw"
}}>
{albums.map((element,index)=>{
  return <div style={{padding:"10px"}} className='album1'>
    <Link to={`/album/${element.id}`}>
    <img  style={{height:"160px",
      width:"160px",
      borderRadius:"5px"
    }} src={element.image} alt=''/>
    </Link>
    <br/>
    <h3 style={{width:"170px",lineHeight:"25px"}}>{element.name}</h3>
    <p style={{textWrap:"wrap",
      width:"160px",
      lineHeight:"20px"
    }}>{element.desc}</p>
    </div>
})}
</div>
<br/>
  <h2>Today's biggest hits</h2>
  <br/>
  <div className='songslist' style={{display:"flex",
  flexDirection:"row",
  justifyContent:"space-evenly",
  gap:"25px",
  alignItems:"center",
  width:"75.5vw",
  overflow:"auto",
  
}}>
  {
    songs.map((element,index)=>{
      return <div key={index} className='song1' style={{padding:"10px"}} >
         <img
                style={{height:"160px", width:"160px", borderRadius:"5px", cursor:"pointer"}}
                src={element.image}
                alt=""
                onClick={() => setCurrentIndex(index)}
              />
         <h3 style={{width:"170px",lineHeight:"25px"}}>{element.name}</h3>
    <p style={{textWrap:"wrap",
      width:"160px",
      lineHeight:"20px"
    }}>{element.desc}</p>
        </div>
    })
  }
</div>
    </>
  );
}

export default Homepage;
