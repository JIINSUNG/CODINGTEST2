function solution(myString) {
    var answer = '';
    
    for(const char of myString){
        if (char === 'A' || char === 'a'){
            answer += 'A'
        }else{
            answer += char.toLowerCase()
        }
    }
    return answer;
}