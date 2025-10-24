function solution(numbers) {
    var answer = [];
    
    for (const num of numbers){
        if (num % 2 === 0){
            answer.push(num+1)
            continue
        }
        const n = BigInt(num);
        
        const leastZero = (~n) & (n + 1n); 


        const target = n + leastZero - (leastZero / 2n);
        
        answer.push(target);
    }
    return answer;
}