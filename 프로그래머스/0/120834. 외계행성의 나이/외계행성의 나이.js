function solution(age) {
    var answer = '';
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    
    age = String(age)
    
    for(const idx of age){
        answer += alphabet.at(+idx)
    }
    
    return answer;
}