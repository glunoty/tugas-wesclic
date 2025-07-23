// src/components/StatItem.jsx

function StatItem({ number, label }) {
  return (
    <div className="text-center">
      <p className="text-4xl lg:text-5xl font-bold text-purple-600">
        {number}
      </p>
      <p className="text-sm text-gray-500 mt-2">
        {label}
      </p>
    </div>
  );
}

export default StatItem;