import { Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-blue-600">Homoeopathic Clinic</span> & <br className="hidden md:block"/>
            <span className="text-gray-800">Psychological Counselling Center</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience the healing power of homeopathy with our personalized treatments and compassionate care. 
            Your journey to better health starts here.
          </p>
          {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <a 
              href="tel:8983338450" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center gap-2"
            >
              <Phone size={20} />
              Call: 8983338450
            </a>
            <span className="text-gray-500 hidden sm:inline">/</span>
            <a 
              href="tel:8275576265" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center gap-2"
            >
              <Phone size={20} />
              8275576265
            </a>
          </div> */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Book an Appointment
            </a>
            <a 
              href="#services" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
