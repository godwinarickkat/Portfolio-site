import React from 'react'
import './Body.css'
const Body = () => {
  return (
    <div className='body'>
      <div className="left">
        <h1 className='name'>Godwin Wilson</h1>
        <p className='intro'>Experienced in team-driven technical projects<br/> and certified in industry-relevant skills. Currently<br/> specializing in cross-platform app development<br/> with Flutter and actively exploring AI/ML technologies.</p>
        <button className="button">
          <span className="typing-text">{"Let's get started </>"}</span>
        </button>


      </div>
      <div className="right">
        <img
        src="/photo.jpg"
        alt="Profile"
        className='photo'
      />
      </div>
    </div>
  )
}

export default Body
