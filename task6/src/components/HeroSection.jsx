// src/components/HeroSection.jsx

function HeroSection() {
  return (
    // 👇 PERUBAHAN DI SINI: ganti bg-white, tambah pb-32 (padding-bottom)
    <div className="bg-gradient-to-b from-white to-purple-100 px-4 pt-16 pb-32 lg:px-8">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Kolom Kiri: Teks */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Empowering Alumni With
            <span className="text-purple-600"> The AMIKOM Alumni Tracer</span>
          </h1>
          <p className="mt-4 text-gray-500 text-lg">
            Track the success of our graduates and stay connected with the
            AMIKOM Tracer Management Information System.
          </p>
          
          <div className="mt-8 flex items-center justify-center md:justify-start gap-6">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-purple-700 transition-colors shadow-lg">
              Learn More
            </button>
            <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
              Already registered? <span className="font-semibold underline">Sign In</span>
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Gambar */}
        <div className="flex justify-center">
          <img src="/hero.svg" alt="Alumni" className="max-w-sm md:max-w-md scale-x-[-1]" />
        </div>

      </div>
    </div>
  );
}

export default HeroSection;