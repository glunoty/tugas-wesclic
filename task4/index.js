const express = require('express');
const app = express();
app.use(express.json());

// --- Logika & Middleware ---

// Data pengguna pura-pura untuk simulasi
const users = {
  'user-biasa-token': { id: 1, name: 'User Biasa', role: 'user' },
  'manajer-token': { id: 2, name: 'Manajer Keuangan', role: 'manajer' },
};

// 1. Middleware Otentikasi (dari Tugas 3, sedikit dimodifikasi)
// Sekarang middleware ini akan menambahkan data pengguna ke object `req`
const checkAuth = (req, res, next) => {
  const token = req.headers.authorization;
  const user = users[token];

  if (user) {
    req.user = user; // Simpan informasi user di object request
    next();
  } else {
    res.status(401).json({ message: 'Akses ditolak. Token tidak valid atau Anda harus login.' });
  }
};

// --- INTI JAWABAN TUGAS 4 ---

// 2. Middleware Otorisasi (untuk Cek Peran/Role)
// Ini adalah "middleware factory", sebuah fungsi yang menghasilkan middleware.
// Ini membuatnya bisa digunakan ulang untuk peran yang berbeda-beda.
const checkRole = (allowedRole) => {
  return (req, res, next) => {
    // Kita berasumsi `checkAuth` sudah berjalan sebelumnya, jadi `req.user` sudah ada.
    if (req.user && req.user.role === allowedRole) {
      next(); // Lanjutkan jika peran sesuai
    } else {
      // Kirim error 403 (Forbidden) jika peran tidak sesuai
      res.status(403).json({ message: 'Akses ditolak. Anda tidak punya hak akses yang cukup.' });
    }
  };
};

// --- Contoh Route untuk Demonstrasi ---

// Halaman Laporan Keuangan yang diproteksi oleh DUA middleware
// Alur: Request -> checkAuth -> checkRole('manajer') -> Handler Utama
app.get('/laporan-keuangan', checkAuth, checkRole('manajer'), (req, res) => {
  res.json({ 
    message: `Selamat datang, ${req.user.name}! Anda berhasil mengakses laporan keuangan rahasia.` 
  });
});

// Halaman Dashboard biasa yang hanya butuh login
app.get('/dashboard', checkAuth, (req, res) => {
  res.json({
    message: `Selamat datang di dashboard, ${req.user.name}!`
  });
});


// Menjalankan server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server untuk Tugas 4 berjalan di http://localhost:${PORT}`);
});