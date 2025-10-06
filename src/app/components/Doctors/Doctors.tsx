import { Phone, Award, Briefcase } from 'lucide-react';

const Doctors = () => {
  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Expert Doctors
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our team of experienced and dedicated healthcare professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Dr. Harish G. Patil */}
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
            <div className="relative p-10 text-white overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-10"></div>
              <div className="absolute inset-0 bg-[url('/homeo-doc.png')] bg-cover bg-right opacity-90"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold">Dr. Harish G. Patil</h3>
                <p className="text-white">Homeopathic & Psychological Consultant</p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Qualifications</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• B.H.M.S. (Pune)</li>
                    <li>• C.G.O.</li>
                    <li>• PGDPC</li>
                    <li>• M.S. (Psy & Couns)</li>
                    <li>• M.O. @ CMHCC</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Experience</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Abc</li>
                    <li>• Xyz</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center mt-8 pt-6 border-t border-gray-200">
                <a 
                  href="tel:8983338450" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  8983338450 / 8275576265
                </a>
              </div>
            </div>
          </div>

          {/* Dr. Mrs. Roopali H. Patil */}
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
            <div className="relative p-10 text-white overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-10"></div>
              <div className="absolute inset-0 bg-[url('/ayurvedic-doc.png')] bg-cover bg-center opacity-90 blur-xs"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold">Dr. Mrs. Roopali H. Patil</h3>
                <p className="text-white">Ayurvedic Consultant</p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Qualifications</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• B.A.M.S</li>
                    <li>• P.G.D.C.C</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Experience</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Internship (Ayurvedic Clinics)</li>
                    <li>• CHO (Community Health Officer) – 4 Years</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center mt-8 pt-6 border-t border-gray-200">
                <a 
                  href="tel:9028065223" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  9028065223
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
