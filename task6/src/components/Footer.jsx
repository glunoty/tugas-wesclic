// src/components/Footer.jsx

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-900 text-gray-300 py-8 px-4 lg:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        
        {/* Bagian Kiri: Copyright */}
        <p className="text-sm">
          &copy; {currentYear} Wesclic Indonesia Neotech. All Rights Reserved.
          <br />
          Slicing Task by Sheptiyan Agung Rizmawan.
        </p>
        
        {/* Bagian Kanan: Link Sosial Media (Placeholder) */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;