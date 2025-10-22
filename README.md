# REST API Layanan Cuci Sepatu

Ini adalah proyek REST API sederhana untuk mengelola data daftar barang cuci sepatu, dibangun menggunakan Node.js, Express.js, dan Supabase.

---
## 🎯 Tujuan dan Fitur Utama
Tujuan proyek ini adalah untuk memenuhi tugas dan mendemonstrasikan proses CRUD (Create, Read, Update, Delete) pada sebuah layanan.

Fitur utama:
* **Create**: Menambah data cucian sepatu baru.
* **Read**: Menampilkan semua data dan melakukan filter berdasarkan status.
* **Update**: Mengubah status cucian (misal: dari 'Diterima' menjadi 'Selesai').
* **Delete**: Menghapus data cucian dari daftar.

---
## 📦 Struktur Data
Data item yang dikelola memiliki struktur sebagai berikut:
* `id`: ID unik (integer)
* `created_at`: Waktu data dibuat (timestamp)
* `nama_pelanggan`: Nama pemilik sepatu (text)
* `merk_sepatu`: Merk sepatu yang dicuci (text)
* `status`: Status cucian ('Diterima', 'Dicuci', 'Selesai', 'Diambil') (text)

---
## 🔌 Endpoint API

Berikut adalah daftar endpoint yang tersedia beserta contoh request dan response.

### 1. Menambah Data Baru
Menambahkan data cucian sepatu baru ke dalam daftar.

* **Method**: `POST`
* **Endpoint**: `/items`
* **Request Body**:
    ```json
    {
      "nama_pelanggan": "Andi",
      "merk_sepatu": "Converse"
    }
    ```
* **Response Sukses (201 Created)**:
    ```json
    {
      "message": "Data berhasil ditambahkan",
      "data": {
          "id": 1,
          "created_at": "2025-10-22T13:45:00.123Z",
          "nama_pelanggan": "Andi",
          "merk_sepatu": "Converse",
          "status": "Diterima"
      }
    }
    ```

### 2. Mendapatkan Semua Data
Menampilkan semua data cucian yang ada.

* **Method**: `GET`
* **Endpoint**: `/items`
* **Response Sukses (200 OK)**:
    ```json
    [
      {
          "id": 1,
          "created_at": "2025-10-22T13:45:00.123Z",
          "nama_pelanggan": "Andi",
          "merk_sepatu": "Converse",
          "status": "Diterima"
      },
      {
          "id": 2,
          "created_at": "2025-10-22T13:50:00.456Z",
          "nama_pelanggan": "Budi",
          "merk_sepatu": "Nike",
          "status": "Selesai"
      }
    ]
    ```

### 3. Filter Data Berdasarkan Status
Menampilkan data cucian yang sudah difilter berdasarkan status tertentu.

* **Method**: `GET`
* **Endpoint**: `/items?status=Selesai`
* **Response Sukses (200 OK)**:
    ```json
    [
      {
          "id": 2,
          "created_at": "2025-10-22T13:50:00.456Z",
          "nama_pelanggan": "Budi",
          "merk_sepatu": "Nike",
          "status": "Selesai"
      }
    ]
    ```

### 4. Mengubah Status Data
Mengubah status dari data cucian tertentu berdasarkan ID.

* **Method**: `PATCH`
* **Endpoint**: `/items/:id` (Contoh: `/items/1`)
* **Request Body**:
    ```json
    {
      "status": "Selesai"
    }
    ```
* **Response Sukses (200 OK)**:
    ```json
    {
      "message": "Status berhasil diubah",
      "data": {
          "id": 1,
          "created_at": "2025-10-22T13:45:00.123Z",
          "nama_pelanggan": "Andi",
          "merk_sepatu": "Converse",
          "status": "Selesai"
      }
    }
    ```

### 5. Menghapus Data
Menghapus data cucian tertentu berdasarkan ID.

* **Method**: `DELETE`
* **Endpoint**: `/items/:id` (Contoh: `/items/1`)
* **Response Sukses (200 OK)**:
    ```json
    {
      "message": "Data berhasil dihapus"
    }
    ```

---
## ⚙️ Langkah Instalasi & Menjalankan API

1.  **Clone repository ini**:
    ```bash
    git clone https://github.com/rabelva21/laundry-cuci-sepatu-API
    cd laundry-cuci-sepatu-API
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Buat file `.env`**: Buat file bernama `.env` di folder utama dan isi dengan kredensial Supabase Anda.
    ```
    SUPABASE_URL=URL_PROYEK_SUPABASE_ANDA
    SUPABASE_KEY=SERVICE_ROLE_KEY_ANDA
    ```

4.  **Jalankan server**:
    ```bash
    node index.js
    ```

5.  API akan berjalan di `http://localhost:3000`.

---
## 🚀 Link Deploy (Vercel)

[MASUKKAN LINK VERCEL ANDA DI SINI SETELAH DEPLOY]