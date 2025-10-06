import Image from 'next/image';

// Placeholder images - replace with actual clinic/treatment images
const galleryImages = [
  { id: 1, src: '/gal1.png', alt: 'Doctor Consultation' },
  { id: 2, src: '/gal7.png', alt: 'Clinic Interior' },
  { id: 3, src: '/gal2.png', alt: 'Homeopathic Medicine' },
  { id: 4, src: '/gal6.png', alt: 'Treatment Room' },
  { id: 5, src: '/gal4.png', alt: 'Natural Herbs' },
  { id: 6, src: '/gal5.png', alt: 'Patient Care' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Take a look at our clinic and the care we provide to our patients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-64">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-medium text-lg">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
