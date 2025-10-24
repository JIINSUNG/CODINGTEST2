function solution(numbers) {
    var answer = '';
    
    numbers.sort((a, b) => {
        const strAB = String(a) + String(b)
        const strBA = String(b) + String(a)
        return strBA - strAB
    })
    
    if(numbers.length === 0 || numbers[0] === 0){
        return "0"
    }
    
    return numbers.join('');
}