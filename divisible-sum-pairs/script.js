/**
 * 1. Harus jumlahin dua angka array[nested loop] yang hasilnya dapat dibagi k
 * 2. Berarti looping pertama untuk each array, looping kedua init + 1 sampai n
 * 3. Jumlahkan arr[i] + arr[j] kalo bisa dibagi 3 ya count++
 * 4. Let's goo
 */


function divisibleSumPairs(n, k, ar) {

    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                count++;
            }
        }
    }

    return count;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))