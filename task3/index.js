const express = require('express');
const app = express();
app.use(express.json());

// --- INTI JAWABAN TUGAS 3 ---

// 1. Membuat Middleware untuk Cek Otentikasi (checkAuth)
// Middleware ini akan memeriksa apakah ada "Authorization" header dengan token yang benar.
const checkAuth = (req, res, next) => {
  const token = req.headers.authorization;

  // Di aplikasi nyata, ini akan berupa verifikasi token JWT yang kompleks.
  // Untuk tugas ini, kita sederhanakan: token yang valid adalah 'secret-token'.
  if (token === 'secret-token') {
    // Jika token valid, lanjutkan ke logic route selanjutnya
    console.log('Otentikasi Berhasil');
    next();
  } else {
    // Jika token tidak ada atau tidak valid, kirim error 401 (Unauthorized)
    console.log('Otentikasi Gagal: Token tidak valid atau tidak ada.');
    res.status(401).json({ message: 'Akses ditolak. Anda harus login.' });
  }
};

// --- Contoh Route untuk Demonstrasi ---

// Route publik, tidak perlu middleware
app.get('/', (req, res) => {
  res.send('Ini adalah halaman utama. Semua orang bisa akses.');
});

// Route pura-pura untuk login dan mendapatkan token
app.post('/login', (req, res) => {
  // (Di sini seharusnya ada logika verifikasi username/password)
  // Kita anggap login berhasil dan berikan token rahasia.
  res.json({
    message: 'Login berhasil!',
    token: 'secret-token', // Ini token yang harus digunakan untuk akses halaman checkout
  });
});

// 2. Menerapkan Middleware 'checkAuth' pada Route '/checkout'
// Middleware 'checkAuth' ditaruh di antara path ('/checkout') dan handler utamanya.
app.get('/checkout', checkAuth, (req, res) => {
  res.json({ message: 'Selamat! Anda berhasil mengakses halaman checkout.' });
});

// Menjalankan server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server untuk Tugas 3 berjalan di http://localhost:${PORT}`);
});