function solution(n, numlist) {
    var answer = [];
    
    numlist = numlist.filter((num) => num%n === 0)
    
    return numlist
}