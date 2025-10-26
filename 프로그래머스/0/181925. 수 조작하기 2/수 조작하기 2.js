function solution(numLog) {
    
    var answer = '';
    for (let i=1; i < numLog.length; i++){
        if(numLog.at(i) === numLog.at(i-1)+10){
            answer += 'd'
        }else if(numLog.at(i) === numLog.at(i-1)+1){
            answer += 'w'
        }else if (numLog.at(i) === numLog.at(i-1)-1){
            answer += 's'
        } else {
            answer += 'a'
        }
    }
    return answer;
}