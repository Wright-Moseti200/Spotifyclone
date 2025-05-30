import React, { useState } from 'react'
import "./navbar.css";
import { Outlet,Link,useNavigate } from 'react-router-dom';
import homepng from "../Assets/home.png";
import searchpng from "../Assets/search.png";
import rightpng from "../Assets/right_arrow.png";
import addpng from "../Assets/plus.png";
import spotifysign from "../Assets/stack.png";
import leftpng from "../Assets/left_arrow.png";
import Player from './Player';
const Navbar = () => {
    let navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleBack = () => {
        navigate(-1);
    }

    const handleForward = () => {
        navigate(1);
    }
  return (
    <>
    <nav className='navigation'>
        <div className='navigation-bar'>
            <div className='bar1'>
                <h3><Link style={{color:"white",
                    textDecoration:"none"
                }}
                 to="/"><img src={homepng} alt=""/>{""} Home </Link></h3>
                 <br/>
               <h3> <Link  style={{color:"white",
                    textDecoration:"none"
                }}
                 to="/"><img src={searchpng} alt=""/>{""} Search </Link></h3>
            </div>
            <div className='bar2'>
                <div className='bar2-group1'>
                    <h4 style={{display:"flex",
                        flexDirection:"row",
                        alignItems:"center",
                        justifyContent:"center",
                        gap:"10px",
                        textAlign:"center"
                    }}> <img src={spotifysign} alt='' style={{height:"20px"}}/> Your Library</h4>
                    <div style={{display:"flex",gap:"10px"}}>
                    <img style={{height:"20px"}} src={rightpng} alt=""/>
                    <img  style={{height:"20px"}} src={addpng} alt=""/>
                    </div>
                </div>
                <br/>
                <div className='bar2-group2'>
                    <h4>Create your first playlist</h4>
                    <br/>
                    <p>its easy we'll help you</p>
                    <br></br>
                    <button>Create Playlist</button>
                </div>
                <br/>
                <div className='bar2-group2'>
                     <h4>Let`s find some podcasts to follow</h4>
                     <br/>
                    <p>We'll keep you updated on new episodes</p>
                    <br></br>
                    <button>Browse podcasts</button>
                </div>
            </div>
        </div>
        <div>
              <>
    <div className='homepage'>
<div className='homepage-content'>
  <div className='homepage-nav'>
    <div style={{display:"flex",
      gap:"10px"
    }}>
   <div onClick={handleBack}><img src={leftpng} alt=""/></div>
   <div onClick={handleForward}><img src={rightpng} alt=""/></div>
    </div>
    <div className='homepage-nav2'>
      <button>Explore Premium</button>
      <button>Install App</button>
      <p>D</p>
    </div>
  </div>
  <br/>
<div className='selection'>
  <p>All</p>
  <p>Music</p>
  <p>Podcasts</p>
</div>
<br/>
<Outlet context={[currentIndex, setCurrentIndex]}/>
</div>
</div>
</>
</div>
    </nav>
    <Player index={currentIndex} />
    </>
  );
}

export default Navbar;
