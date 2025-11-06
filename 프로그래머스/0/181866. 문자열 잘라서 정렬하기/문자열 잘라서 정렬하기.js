function solution(myString) {
    var answer = [];
    
    myString = myString.split('x')
    myString.sort()
    
    for (const word of myString){
        if (word === ''){
            continue
        }
        answer.push(word)
    }
    return answer;
}