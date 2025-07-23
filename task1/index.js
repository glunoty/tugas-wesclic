const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Fungsi utama untuk menjalankan semua logika
async function main() {
  console.log('Memulai proses...');

  // --- Seeding Data (Memasukkan data contoh agar bisa diuji) ---
  // Hapus data lama (opsional, agar tidak duplikat setiap kali dijalankan)
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  // Buat 2 kategori baru
  await prisma.category.createMany({
    data: [
      { name: 'Elektronik' },
      { name: 'Pakaian' },
    ],
  });
  console.log('Data kategori berhasil dibuat.');

  // Cari ID kategori 'Elektronik'
  const elektronikCategory = await prisma.category.findUnique({ where: { name: 'Elektronik' } });

  // Buat 2 produk di bawah kategori 'Elektronik'
  await prisma.product.createMany({
    data: [
      { name: 'Laptop', price: 15000000, categoryId: elektronikCategory.id },
      { name: 'Mouse Gaming', price: 500000, categoryId: elektronikCategory.id },
    ],
  });
  console.log('Data produk berhasil dibuat.');

  // Fungsi untuk mengambil produk berdasarkan nama kategori
  async function getProductsByCategoryName(categoryName) {
    console.log(`\n=> Mencari produk untuk kategori: "${categoryName}"`);

    const productsInCategory = await prisma.product.findMany({
      where: {
        // Mencari produk di mana relasi 'category'-nya memiliki 'name' yang sesuai
        category: {
          name: categoryName,
        },
      },
    });

    return productsInCategory;
  }

  // Panggil fungsi tersebut untuk mendapatkan hasilnya
  const elektronikProducts = await getProductsByCategoryName('Elektronik');

  // Tampilkan hasilnya
  console.log('\nHasilnya adalah:');
  console.log(elektronikProducts);
}

// Menjalankan fungsi utama dan menutup koneksi database setelah selesai
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });