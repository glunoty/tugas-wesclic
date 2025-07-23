// src/components/Navbar.jsx

function Navbar() {
  return (
    // Menambahkan padding horizontal px-8 atau lebih besar untuk di layar lebar
    <nav className="bg-white p-4 lg:px-8 flex justify-between items-center">
      {/* Bagian Kiri: Logo & Menu */}
      <div className="flex items-center space-x-8">
        <div className="font-bold text-xl text-purple-700"><img 
              src="/amikom.png" 
              alt="Career Development Center AMIKOM" 
              className="rounded-lg w-32" 
            /></div> {/* Diubah */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="text-gray-600 hover:text-purple-700">Home</a></li>
          <li><a href="#" className="text-gray-600 hover:text-purple-700">Kuisioner</a></li>
          <li><a href="#" className="text-gray-600 hover:text-purple-700">Startup</a></li>
        </ul>
      </div>

      {/* Bagian Kanan: Tombol Sign In */}
      <div>
        {/* Diubah menjadi warna ungu */}
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;