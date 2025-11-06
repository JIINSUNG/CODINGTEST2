function solution(order) {
    var answer = 0;
    
    for (const char of String(order)){
        if (char === '3' || char === '6' || char === '9'){
            answer += 1
        }
    }
    
    return answer
}