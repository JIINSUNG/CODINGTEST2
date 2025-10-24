function solution(numbers) {
    var answer = '';
    
    numbers.sort((a, b) => {
        const strAB = String(a) + String(b)
        const strBA = String(b) + String(a)
        return strBA - strAB
    })
    
    // 가장 큰 수가 0으로 시작하는 경우
    if(numbers[0] === 0){
        return "0"
    }
    
    return numbers.join('');
}

