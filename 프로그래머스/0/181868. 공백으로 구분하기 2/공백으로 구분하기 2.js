function solution(my_string) {
    var answer = [];
    
    my_string = my_string.split(' ')
    for(const word of my_string){
        if (word){
            answer.push(word)
        }
    }
    return answer;
}