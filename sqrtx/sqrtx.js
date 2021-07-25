var mySqrt = function(x) {
    var pivot = x
    while(pivot**2 > x) {
        pivot = Math.floor((pivot + x/pivot)/2)
    }
    return pivot
};