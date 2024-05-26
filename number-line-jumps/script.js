/**
 * 1. Ini disuruh buat check kelipatan lompatan x1 sama x2 berdasarkan v
 * 2. Ah tiap looping berarti si x nya ditambah v
 * 3. Terus check apakah x1 sama x2 nya sama
 * 4. Eh loopingnya sampai kapan?
 * 5. Oh pakai while aja
 * 6. Kalo si v1 < v2 berarti si v2 ini yang bakal nyusul x1, dan sebaliknya
 * 7. Kasih validasi kalo si v1 nya > v2 berarti while(x1 < x2) karena kemungkinan si x2 yang nyusul x1, dan ketika x1 lebih dari x2 maka loopingnya berhenti. begitupun sebaliknya
 * 8. Let's goo
 * */

function kangaroo(x1, v1, x2, v2) {
    if (v1 > v2) {
        while (x1 < x2) {
            x1 += v1;
            x2 += v2;
        }
    } else if (v1 < v2) {
        while (x2 < x1) {
            x1 += v1;
            x2 += v2;
        }
    }

    return x1 === x2 ? 'YES' : "NO";
}