/**
 * 1. Oh ini berarti harus jumlahin 4 angka dalem array tanpa angka min max ya?
 * 2. Ini bisa sih pake Math.max sama Math.min terus filter aja array nya yang != Math.min Math.max tadi terus tinggal reduce
 * 3. Eh kalo pake sort juga bisa ga sih? urutin ascending, terus tinggal splice index pertama sama terakhir, abis itu tinggal reduce
 * 4. Let's goo
 */
function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);

    const minSum = arr.slice(0, -1).reduce((a, b) => a + b, 0);
    const maxSum = arr.slice(1).reduce((a, b) => a + b, 0);

    console.log(`${minSum} ${maxSum}`);
}
