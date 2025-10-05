import { Leaf, Heart, Brain, Bone, Droplets, Activity } from 'lucide-react';

const services = [
  {
    icon: <Leaf className="w-8 h-8 text-blue-600" />,
    title: "Chronic Diseases",
    description: "Effective treatment for chronic conditions like arthritis, diabetes, and hypertension with natural remedies."
  },
  {
    icon: <Heart className="w-8 h-8 text-blue-600" />,
    title: "Heart Care",
    description: "Holistic approach to cardiovascular health and prevention of heart-related conditions."
  },
  {
    icon: <Brain className="w-8 h-8 text-blue-600" />,
    title: "Neurological Care",
    description: "Specialized care for neurological disorders including migraines and nerve-related conditions."
  },
  {
    icon: <Bone className="w-8 h-8 text-blue-600" />,
    title: "Bone & Joint Care",
    description: "Natural solutions for arthritis, osteoporosis, and joint pain management."
  },
  {
    icon: <Droplets className="w-8 h-8 text-blue-600" />,
    title: "Skin Care",
    description: "Treatment for various skin conditions like eczema, psoriasis, and acne."
  },
  {
    icon: <Activity className="w-8 h-8 text-blue-600" />,
    title: "Respiratory Care",
    description: "Natural relief for asthma, allergies, and other respiratory conditions."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of homeopathic treatments tailored to your individual health needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
