/**
 * 1. Oh harus ngubah dari format 12 jam ke 24 jam
 * 2. Cari jam, menit, detik, sama period nya dulu ga sih
 * 3. Kalo AM dan jam nya 12 berarti harus diganti jadi 00
 * 4. kalo PM dan jam nya 12 berarti harus tetep 12, selain itu si jam nya + 12
 * 5. Ini tinggal split sih sparatornya pake :
 * 6. Terus check period nya AM atau PM, jam nya 12 apa bukan
 * 7. Kalo jamnya 12AM berati si jam diganti jadi 00
 * 8. Kalo jamnya 12PM berarti jangan ditambah 12
 * 9. Udah deh tinggal return
 */



function timeConversion(s) {
    // Write your code here
    let [hours, minutes, secondPeriod] = s.split(':');
    let seconds = secondPeriod.slice(0, 2);
    let period = secondPeriod.slice(2);

    if (period === 'AM') {
        hours = hours === '12' ? '00' : hours;
    } else {
        hours = hours === '12'  ? hours : String(parseInt(hours) + 12)
    }

    return `${hours}:${minutes}:${seconds}`
}

console.log(timeConversion('12:40:22AM'))