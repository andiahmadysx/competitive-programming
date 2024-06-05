/**
 * 1. Lily tu pengin menjumlahkan angka di coklat yang hasilnya tanggal ulang tahun ron
 * 2. Berapa banyak bilangan yang dapat dijumlahkan adalah berdasarkan bulan lahir ron
 * 3. Looping array nya, next looping lagi sebanyak < m terus sum deh berdasarkan value i[looping pertama] + j[looping kedua]
 * 4. Let's goo
 */


function birthday(s, d, m) {
    let count = 0;

    for (let i = 0; i <= s.length - m; i++) {
        let sum = 0;
        for (let j = 0; j < m; j++) {
            sum += s[i + j];
        }
        if (sum === d) {
            count++;
        }
    }

    return count;
}

console.log(birthday([4], 4, 1));