import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'ISO 9001:2015 certified manufacturing',
  'Pan-India distribution network',
  '500+ dealer partners',
  'State-of-the-art R&D facility',
  'Environmentally responsible production',
  'Customized solutions for architects'
];

function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Crafting Excellence Since 1990
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Woodcraft Adda has been at the forefront of the wood products industry,
              delivering premium plywood, laminates, and veneers that transform spaces
              and exceed expectations.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to quality, innovation, and sustainability has made us
              the preferred choice for homeowners, architects, and contractors across
              the nation. With cutting-edge technology and traditional craftsmanship,
              we create products that stand the test of time.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition">
              Learn More About Us
            </button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/5691551/pexels-photo-5691551.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Manufacturing"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/6045267/pexels-photo-6045267.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Quality"
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.pexels.com/photos/5691646/pexels-photo-5691646.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Innovation"
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/6045416/pexels-photo-6045416.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Team"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-amber-600 text-white p-8 rounded-lg shadow-xl">
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
