module.exports = function reverse (n) {
    if (n < 0) n *= -1;
    arr = n.toString().split('').reverse();
    
    while (true) {
        if (arr[0] == '0') {
            arr.shift();
        } else {
            break;
        }
    }
    
    return arr.join('');
}
