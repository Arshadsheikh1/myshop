import { Layers, Box, Sparkles, DoorOpen } from 'lucide-react';

const products = [
  {
    icon: Layers,
    title: 'Plywood',
    description: 'Premium quality plywood with superior strength and durability for all your construction needs',
    image: 'https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=800',
    categories: ['Marine', 'Commercial', 'Fire Resistant']
  },
  {
    icon: Sparkles,
    title: 'Laminates',
    description: 'Stunning decorative laminates in hundreds of designs to bring your interior vision to life',
    image: 'https://images.pexels.com/photos/6585760/pexels-photo-6585760.jpeg?auto=compress&cs=tinysrgb&w=800',
    categories: ['High Gloss', 'Matt Finish', 'Textured']
  },
  {
    icon: Box,
    title: 'Veneers',
    description: 'Natural wood veneers offering authentic aesthetics with modern engineering excellence',
    image: 'https://images.pexels.com/photos/4792485/pexels-photo-4792485.jpeg?auto=compress&cs=tinysrgb&w=800',
    categories: ['Oak', 'Walnut', 'Teak']
  },
  {
    icon: DoorOpen,
    title: 'Doors',
    description: 'Engineered doors combining style, security and sustainability for residential and commercial use',
    image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
    categories: ['Flush Doors', 'Panel Doors', 'Designer']
  }
];

function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Product Range
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for all your woodworking and interior design needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-amber-600 w-12 h-12 rounded-lg flex items-center justify-center mb-2">
                      <Icon className="text-white" size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.categories.map((cat, i) => (
                      <span
                        key={i}
                        className="text-xs bg-amber-100 text-amber-800 px-3 py-1 rounded-full"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <button className="text-amber-600 hover:text-amber-700 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Explore More
                    <span>→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;
