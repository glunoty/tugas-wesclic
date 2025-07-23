// src/components/AboutSection.jsx

import StatItem from './StatItem';

function AboutSection() {
  return (
    // 👇 PERUBAHAN DI SINI: ganti bg-white, tambah pb-32
    <div className="bg-gradient-to-b from-white to-purple-100 py-20 px-4 lg:px-8 pb-32">
      <div className="container mx-auto">
        
        {/* Bagian Atas: Grid 2 kolom (Konten tidak berubah) */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Career Development Center AMIKOM
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The first feature of job succession allows companies to share, communicate, and conduct focus group discussions (FGD) until providing meaning information and opportunities for fresh graduates to build networks.
            </p>
            <p className="text-gray-600 leading-relaxed">
              CDC AMIKOM also helps better see the number of needs and supply of human resources from alumni. This information is a major business to see and connect graduates to sunlight to enlarge information plus a major business to see and connect graduates and so on.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="/about.svg" 
              alt="Career Development Center AMIKOM" 
              className="rounded-lg max-w-sm w-full scale-x-[-1]" 
            />
          </div>
        </div>

        {/* Bagian Bawah: Baris Statistik (Konten tidak berubah) */}
        <div className="mt-20 pt-12 border-t border-gray-200 flex flex-wrap justify-around gap-8">
          <StatItem number="25" label="Document Verified" />
          <StatItem number="120" label="User Active" />
          <StatItem number="120" label="Total Partners" />
          <StatItem number="120" label="Job Provided" />
          <StatItem number="120" label="New Schedule" />
        </div>

      </div>
    </div>
  );
}

export default AboutSection;