import { fetchData } from "./fetchData.js";

// Jalankan fetchData setiap 15 menit (900000 ms)
setInterval(fetchData, 900000);

// Jalankan fetchData segera setelah script dijalankan
fetchData();