import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const videoRef = useRef(null);
  const [showSlideInRight, setShowSlideInRight] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    videoElement.currentTime = 2; // Iniciar en el segundo 2

    const handleTimeUpdate = () => {
      const currentTime = videoElement.currentTime;

      if (currentTime >= 8) {
        videoElement.pause(); // Detener en el segundo 8
      }
    };

    videoElement.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      videoElement.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSlideInRight(true);
    }, 7000); // Mostrar después de 7 segundos

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="hero-container">
      <video ref={videoRef} autoPlay muted>
        <source src="src/public/hero-video-1.mp4" type="video/mp4" />
        Tu navegador no admite el elemento de video.
      </video>

      <div className={`hero-text-container ${showSlideInRight ? 'slide-in-right' : 'hidden'}`}>
        <img src="src/public/metalmind-logo.png" alt="" />
        <h2>Transformando Ideas <br /> en Metal desde 1985</h2>
      </div>
    </div>
  );
};

export default Hero;
