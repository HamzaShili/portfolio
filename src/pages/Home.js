import React from 'react'
import webImage from '../images/photo-2.png'
export default function Home() {
  return (
    <div className='alert alert-info' role="alert">
      <img src="/images/photo-1.jpg" width="150px" alt='Avatar' />
      <h1>Hamza Shili</h1>
      <p>Hello my name is Jane Doe, I'am a Fullstack Web Developper</p>
      <img src={webImage} alt="Web" style={{ width: "100%" }} />
    </div>
  )
}
