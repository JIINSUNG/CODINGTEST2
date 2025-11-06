function solution(n) {
    var answer = 0;
    for(let i=6; i<= n * 6; i+= 6){
        if (i % n === 0){
            return parseInt(i/6)
        }
    }
    return answer;
}