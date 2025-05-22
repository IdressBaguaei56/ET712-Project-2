import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const slides = [
    {
      image: "/api/placeholder/1200/800",
      title: "LE MONDE DES MONTRES",
      subtitle: "Discover the Universe of Exclusive Timepieces",
      buttonText: "Explore Collection",
      buttonLink: "/luxury-watches"
    },
    {
      image: "/api/placeholder/1200/800",
      title: "LUXURY TIMEPIECES",
      subtitle: "Handcrafted Excellence Since 1895",
      buttonText: "Shop Luxury",
      buttonLink: "/luxury-watches"
    },
    {
      image: "/api/placeholder/1200/800",
      title: "SMART INNOVATION",
      subtitle: "Technology Meets Elegance",
      buttonText: "Discover Smart Watches",
      buttonLink: "/smart-watches"
    },
    {
      image: "/api/placeholder/1200/800",
      title: "VINTAGE COLLECTION",
      subtitle: "Timeless Pieces With History",
      buttonText: "Explore Vintage",
      buttonLink: "/vintage-watches"
    },
    {
      image: "/api/placeholder/1200/800",
      title: "LIMITED EDITIONS",
      subtitle: "Unique Designs For Collectors",
      buttonText: "View Limited Editions",
      buttonLink: "/luxury-watches"
    }
  ];

  // Handle scroll event to update parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${slide.image})`,
            transform: `translateY(${scrollPosition * 0.3}px)`
          }}
        >
          <div className="slide-content">
            <h1 className="slide-title">
              {slide.title.split(' ').map((word, i) => (
                <span key={i} className="title-word">{word}</span>
              ))}
            </h1>
            <p className="slide-subtitle">{slide.subtitle}</p>
            <Link to={slide.buttonLink} className="slide-cta-button">
              {slide.buttonText}
            </Link>
          </div>
        </div>
      ))}
      
      <div className="slider-controls">
        {slides.map((_, index) => (
          <button 
            key={index}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;