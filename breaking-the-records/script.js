/**
 * 1. Ah ini harus hitung berapa banyak scorenya nambah atau kurang dari rekor dan nilai terkecil game-game sebelumnya ya
 * 2. Berarti each looping harus simpen data max sama min nya dong
 * 3. Kalo scores[i] > max berarti maxCountnya ++ begitupun sama min
 * 4. Terus tinggal return max sama min countnya deh
 * 5. Let's goo
 */


function breakingRecords(scores) {
    let maxCount = 0;
    let minCount = 0;
    let max = scores[0];
    let min = scores[0];

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i];
            maxCount++;
        }

        if (scores[i] < min) {
            min = scores[i];
            minCount++;
        }
    }

    return [maxCount, minCount];
}


breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);