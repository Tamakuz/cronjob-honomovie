import { fetchData } from "./fetchData.js";

// Jalankan fetchData setiap 1 menit (60000 ms)
setInterval(fetchData, 10000);

// Jalankan fetchData segera setelah script dijalankan
fetchData();