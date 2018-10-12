//number of trailing zeros 
//the idea is that a factorial has x trailing zeroes based on the minimum number of multiples of five it has. 10! would have 2 trailing zeros, 25! would have 6 trailing zeros

private long numOfTrailingZeros(long x) {
    long res = 0;
		
    for (; x > 0; x /= 5) {
        res += x/5;
    }
		
    return res;
}