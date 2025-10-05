import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to help and answer any questions you might have. 
            Looking forward to hearing from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Phone Numbers */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Phone className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Phone Numbers</h3>
            <div className="space-y-3">
              <a 
                href="tel:8983338450" 
                className="flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2 text-blue-600" />
                8983338450
              </a>
              <a 
                href="tel:8275576265" 
                className="flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2 text-blue-600" />
                8275576265
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Our Location</h3>
            <div className="text-center">
              <p className="text-gray-700">
                Maharshi Nagar, <br />
                Opp. Pujari Garden, <br />
                Pune - 411037.
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Working Hours</h3>
            <div className="space-y-2">
              
              <div className="flex justify-between">
                <span className="text-gray-600">Mon-Sat:</span>
                <span className="font-medium">6:00 PM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sunday:</span>
                <span className="font-medium">Emergency Only</span>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Contact;
