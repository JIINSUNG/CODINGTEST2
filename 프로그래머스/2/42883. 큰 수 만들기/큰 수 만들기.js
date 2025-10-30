function solution(number, k) {
    var answer = []
    // 결국 앞에 있는 숫자보다 뒤에있는 숫자가 크면 빼는게 이득
    
    answer.push(number.at(0))
    
    for (let i=1; i< number.length; i++){
        while (answer.length > 0 && number.at(i) > answer.at(-1)){
            if(k > 0){
                k--
                answer.pop()
            } else{
                break
            }
        }
        answer.push(number.at(i))
    }
    
    if(answer.at(0) === '0' || answer.length === 0){
        return '0'
    }
    
    while (k > 0) {
        answer.pop();
        k--;
    }
    
    
    return answer.join('');
}