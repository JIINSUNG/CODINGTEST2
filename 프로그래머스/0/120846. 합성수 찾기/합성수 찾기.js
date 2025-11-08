function solution(n) {
    var answer = 0;
    const isTarget = (num) => {
        for(let i=2; i <= num-1; i++){
            if (num % i === 0){
                return true
            }
        }
        return false
    }
    
    for (let i= 4; i <= n; i++){
        if (isTarget(i)){
            answer += 1
            continue
        }
    }
    

    
    return answer;
}