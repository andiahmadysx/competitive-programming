/**
 * 1. Ah ini disuruh hitung banyak total angka paling tinggi ya
 * 2. Sort dulu ga sih, nanti ambil index dari angka paling tinggi abis tuh slice
 * 3. Let's goo
 */
function birthdayCakeCandles(candles) {
    candles.sort((a, b) => a - b);

    const max = Math.max(...candles);
    const tallestCandles = candles.slice(candles.indexOf(max), candles.lastIndexOf(max) + 1)

    console.log(tallestCandles.length);
}

