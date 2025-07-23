const express = require('express');
const Joi = require('joi');

const app = express();
app.use(express.json()); // Middleware agar Express bisa membaca body JSON

// Mendefinisikan skema atau aturan validasi menggunakan Joi
// Aturan:
// - judul: Wajib ada (string) dan tidak boleh kosong.
// - deskripsi: Wajib ada (string) dan minimal 10 karakter.
const taskSchema = Joi.object({
  judul: Joi.string().required(),
  deskripsi: Joi.string().min(10).required(),
});

// Membuat route POST /tasks untuk menerima data dari form
app.post('/tasks', (req, res) => {
  // Menjalankan validasi terhadap data yang masuk (req.body)
  const { error, value } = taskSchema.validate(req.body, { abortEarly: false });

  // Jika validasi gagal, kirim status 400 (Bad Request) beserta detail errornya
  if (error) {
    console.log('Validasi gagal:', error.details.map(err => err.message));
    return res.status(400).json({
      message: 'Data yang Anda kirim tidak valid',
      errors: error.details.map(err => err.message),
    });
  }

  // Jika validasi berhasil, proses data dan kirim status 201 (Created)
  console.log('Validasi berhasil, data diterima:', value);
  res.status(201).json({
    message: 'Tugas baru berhasil dibuat!',
    data: value,
  });
});

// Menjalankan server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server untuk Tugas 2 berjalan di http://localhost:${PORT}`);
});