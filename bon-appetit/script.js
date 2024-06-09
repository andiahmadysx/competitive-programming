function bonAppetit(bill, k, b) {
    // Write your code here
    let count = 0;
    let result = 0;
    for (let i = 0; i < bill.length; i++) {
        if (i !== k) {
            count += bill[i];
        }
    }

    result = b - (count / 2);


    if (result <= 0) {
        console.log('Bon Appetit')
        return;
    }

    console.log(result)
}