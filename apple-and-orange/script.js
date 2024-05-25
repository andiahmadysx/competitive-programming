/**
 * 1. Ini harus hitung berapa banyak buah yang ada di antara range s - t berarti
 * 2. Ah pertama harus hitung jarak buah dari pohonnya
 * 3. Terus check buah ini masuk antara range s - t ga ya
 * 4. Kalo masuk +1
 * 5. Let's goo
 */
function countApplesAndOranges(s, t, a, b, apples, oranges) {

    let appleCount = checkLandingPost(s, t, a, apples);
    let orangeCount = checkLandingPost(s, t, b, oranges);

    function checkLandingPost(start, end, pos, arr){
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            let landingPos = arr[i] + pos;

            if (landingPos >= start && landingPos <= end) {
                count++;
            }
        }

        return count;
    }

    console.log(appleCount);
    console.log(orangeCount);
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])