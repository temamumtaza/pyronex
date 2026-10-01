# Target performa halaman

Dokumen ini menetapkan target rekayasa yang perlu diukur pada perangkat dan jaringan nyata. Angka di bawah adalah target p75, bukan hasil pengukuran yang sudah diklaim lulus.

## Core Web Vitals

- **LCP:** ≤ 2,5 detik pada halaman utama dan halaman komersial.
- **INP:** ≤ 200 ms untuk interaksi menu, formulir, dan kalkulator kapasitas.
- **CLS:** ≤ 0,1 dengan dimensi gambar dan ruang komponen yang ditentukan sejak awal.

## Anggaran aset

- JavaScript halaman utama: target 150–200 KB terkompresi.
- Gambar hero atau gambar utama: target di bawah 250 KB bila kualitas visual tetap memadai.
- Gambar pendukung: target sekitar 150 KB per aset; gunakan WebP atau format yang sesuai.
- Tidak ada video putar otomatis di area atas halaman.
- Gambar di bawah lipatan menggunakan lazy loading dan selalu memiliki `width` serta `height`.
- Font dipantau agar tidak menambah keluarga atau bobot tanpa kebutuhan tampilan yang jelas.

## Cara verifikasi

Ukur halaman beranda, produk, teknologi, tiga landing intent, dan halaman bukti dengan Lighthouse atau PageSpeed Insights dalam mode seluler. Simpan tanggal, URL, perangkat, dan hasil p75 sebelum menyebut target tercapai. Target ini tidak menggantikan pemeriksaan aksesibilitas, HTML, atau runtime.
