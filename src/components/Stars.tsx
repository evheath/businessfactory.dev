import { CSSProperties, useEffect, useState } from "react";

export default function Stars({ }) {
  const [styleObj, setStyleObj] = useState({} as CSSProperties);
  function calculateStars(width: number, height: number) {
    let shadow = '';
    const count = Math.floor(Math.sqrt(width * height) / 14);
    for (let index = 0; index < count; index++) {
      shadow += `${Math.random() * width}px ${Math.random() * height}px #fff, `;
    }
    let stars = shadow.slice(0, shadow.length - 2);
    setStyleObj({
      boxShadow: `${stars}`,
      width: '1px',
      height: '1px',
      position: 'fixed',
      zIndex: -1,
    });
  }

  // useEffect does not run on server-side rendering, 
  // so we can get the screen size from the window object here
  useEffect(() => {
    calculateStars(window.innerWidth, window.innerHeight);
    window.addEventListener('resize', () => {
      calculateStars(window.innerWidth, window.innerHeight);
    })
  }, [])

  return (
    <>
      <div className='star' style={styleObj}></div>
    </>
  )
}