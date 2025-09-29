function solution(n) {
    const MOD = 1000000007;
    let answer = 0
    
    if (n === 1) {
        return 1;
    }
    
    if (n === 2) {
        return 2;
    }
    
    
    let left = 1
    
    let right = 2

    
    
    for(let i=3; i<= n; i++){
        let temp = (left+right) % 1000000007
        left = right
        right = temp
    }
    
    return right
}