# --- TAHAP 1: BUILDER ---
# Menggunakan image Node.js sebagai fondasi untuk membangun proyek
FROM node:24-alpine AS builder

# Menentukan direktori kerja di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json terlebih dahulu
# Ini memanfaatkan cache Docker, sehingga 'npm install' tidak selalu dijalankan ulang
COPY package*.json ./

# Install semua dependencies proyek
RUN npm install

# Salin sisa kode sumber proyek
COPY . .

# Jalankan perintah build dari Vite
RUN npm run build


# --- TAHAP 2: PRODUCTION ---
# Mulai lagi dari awal dengan image Nginx yang sangat ringan
FROM nginx:alpine

# Salin file konfigurasi Nginx kustom yang akan kita buat
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Salin hasil build (folder 'dist') dari tahap 'builder' ke direktori web root Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 untuk web server
EXPOSE 80

# Perintah untuk menjalankan Nginx saat container dimulai
CMD ["nginx", "-g", "daemon off;"]