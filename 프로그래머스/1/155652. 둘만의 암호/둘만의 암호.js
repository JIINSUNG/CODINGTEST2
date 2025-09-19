function solution(s, skip, index) {
    var answer = '';
    
    
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    
    for(const char of skip){
        alphabet = alphabet.replace(char, '')
    }
    
    for (const alpha of s) {
        const idx = alphabet.indexOf(alpha)
        
        answer += alphabet[(idx + index) % (alphabet.length) ]
    }
    
    return answer;
}