import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php', // Untuk Blade Pagination
    './storage/framework/views/*.php', // Untuk view yang di-cache
    './resources/views/**/*.blade.php', // Semua Blade file views
    './resources/js/**/*.js', // Semua file JS (untuk React atau Vue)
    './resources/js/**/*.jsx', // Jika menggunakan React
    './resources/js/**/*.vue', // Jika menggunakan Vue
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Misalnya jika ingin menambahkan warna kustom
        primary: '#3490dc',
        secondary: '#ffed4a',
      },
      spacing: {
        // Menambahkan spacing kustom (misalnya)
        '128': '32rem',
        '144': '36rem',
      },
    },
  },

  plugins: [
    forms,
    require('@tailwindcss/typography'), // Untuk plugin Typography jika digunakan
    require('@tailwindcss/aspect-ratio'), // Untuk plugin Aspect Ratio jika dibutuhkan
    require('@tailwindcss/line-clamp'), // Untuk plugin Line Clamp jika dibutuhkan
  ],
};
