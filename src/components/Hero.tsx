import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const slides = [
  {
    title: 'Explore The Elegance of Wood',
    subtitle: 'Experience the art of superior craftsmanship',
    description: 'Premium quality plywood and laminates for your dream spaces',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920'
  },
  {
    title: 'Innovation in Every Layer',
    subtitle: 'Technology meets tradition',
    description: 'Advanced manufacturing processes for unmatched durability',
    image: 'https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=1920'
  },
  {
    title: 'Design Your Perfect Space',
    subtitle: 'Transform imagination into reality',
    description: 'Extensive range of textures, finishes and designs',
    image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1920'
  }
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-screen mt-[120px] lg:mt-[140px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-2xl text-white">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-2xl md:text-3xl mb-4 text-amber-200">
                  {slide.subtitle}
                </p>
                <p className="text-lg md:text-xl mb-8 text-gray-200">
                  {slide.description}
                </p>
                <div className="flex gap-4">
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                    Explore Products
                  </button>
                  <button className="bg-white hover:bg-gray-100 text-amber-900 px-8 py-3 rounded-lg font-semibold transition">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition"
      >
        <ChevronLeft className="text-white" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition"
      >
        <ChevronRight className="text-white" size={24} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? 'bg-amber-600 w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
