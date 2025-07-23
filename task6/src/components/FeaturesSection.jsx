// src/components/FeaturesSection.jsx

import FeatureCard from './FeatureCard';

function FeaturesSection() {
  return (
    // 👇 PERUBAHAN DI SINI: hapus bg-purple-50 & py-20, tambah -mt-24
    <div className="-mt-12 px-4 lg:px-8">
      <div className="container mx-auto text-center">
        
        {/* Judul dan deskripsi tidak perlu diubah */}
        
        {/* Container kartu besar tidak perlu diubah */}
        <div className="bg-white rounded-t-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Apa yang kamu dapatkan di Tracer Study?
        </h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          Short filling out the questionnaire and create your CV easily.
        </p>
        
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <FeatureCard
              icon="📊"
              title="Data Kuesioner"
              description="Manage your graphs of graduates from university."
            />
            <FeatureCard
              icon="📄"
              title="CV Builder"
              description="Provide support and open access to maximize your productivity."
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default FeaturesSection;