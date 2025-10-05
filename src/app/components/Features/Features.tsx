import { HeartPulse, ShieldCheck, Users } from 'lucide-react';

const features = [
  {
    icon: <HeartPulse className="w-12 h-12 text-blue-600" />,
    title: "Experienced Practitioners",
    description: "Our team of certified homeopathic doctors brings years of experience in treating various health conditions with natural remedies."
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-blue-600" />,
    title: "Safe & Natural Treatment",
    description: "We use only the purest natural ingredients to create personalized treatment plans without harmful side effects."
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: "Patient-Centered Care",
    description: "Your health is our priority. We provide personalized care tailored to your specific needs and health goals."
  }
];

export default function Features() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
