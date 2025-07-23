// src/components/FeatureCard.jsx

function FeatureCard({ icon, title, description }) {
  return (
    // Styling untuk kartu: padding, sudut membulat, bayangan, dan border
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-start">
      {/* Icon */}
      <div className="text-3xl mb-4 bg-purple-100 text-purple-700 p-3 rounded-lg">
        {icon}
      </div>

      {/* Judul */}
      <h3 className="text-2xl font-bold text-gray-800 mb-2">
        {title}
      </h3>

      {/* Deskripsi */}
      <p className="text-gray-500 mb-4">
        {description}
      </p>
      
      {/* Link */}
      <a href="#" className="text-purple-600 font-semibold mt-auto hover:text-purple-800 transition-colors">
        Get Started →
      </a>
    </div>
  );
}

export default FeatureCard;