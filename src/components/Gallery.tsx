const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Modern Living Room'
  },
  {
    url: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Elegant Kitchen'
  },
  {
    url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Contemporary Bedroom'
  },
  {
    url: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Office Interiors'
  },
  {
    url: 'https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Wardrobe Design'
  },
  {
    url: 'https://images.pexels.com/photos/7534555/pexels-photo-7534555.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Dining Area'
  }
];

function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Design Inspiration Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover endless possibilities with our products in real-world applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-bold mb-2">{image.title}</h3>
                  <button className="text-amber-400 hover:text-amber-300 font-semibold text-sm">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
