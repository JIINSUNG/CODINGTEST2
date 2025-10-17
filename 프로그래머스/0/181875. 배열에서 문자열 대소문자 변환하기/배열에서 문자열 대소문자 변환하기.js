function solution(strArr) {
    var answer = [];
    
    for (let i=0; i< strArr.length; i++){
        if (i%2 === 0){
            answer.push(strArr.at(i).toLowerCase())
        }else{
            answer.push(strArr.at(i).toUpperCase())
        }
    }
    return answer;
}