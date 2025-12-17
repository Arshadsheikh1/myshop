import { Shield, Leaf, Award, Zap, Users, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'Rigorous quality control ensuring every product meets international standards'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Sustainable sourcing and manufacturing practices for a greener tomorrow'
  },
  {
    icon: Award,
    title: '30+ Years Legacy',
    description: 'Trusted by millions of customers and industry professionals nationwide'
  },
  {
    icon: Zap,
    title: 'Advanced Technology',
    description: 'State-of-the-art manufacturing facilities with cutting-edge innovation'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated customer service and technical assistance throughout your project'
  },
  {
    icon: TrendingUp,
    title: 'Industry Leader',
    description: 'Setting benchmarks in quality, design and customer satisfaction'
  }
];

function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Woodcraft Adda
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience excellence in every aspect of our products and services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-amber-600 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-amber-100 group-hover:bg-amber-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon className="text-amber-600 group-hover:text-white transition-colors duration-300" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
