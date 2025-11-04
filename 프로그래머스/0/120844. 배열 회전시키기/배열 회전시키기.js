function solution(numbers, direction) {
    var answer = [];
    
    if (direction === 'left'){
        const target = numbers.shift()
        numbers.push(target)
    } else {
        const target = numbers.pop()
        numbers.unshift(target)
    }
    
    return numbers;
}