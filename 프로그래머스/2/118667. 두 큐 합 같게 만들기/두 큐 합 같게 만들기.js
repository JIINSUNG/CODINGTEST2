function solution(queue1, queue2) {
    var answer = 0;
    
    const extendedArr = [...queue1, ...queue2]
    
    
    let i =0
    let j = queue1.length
    
    let currentSum = queue1.reduce((acc, val) => acc+val)
    
    let totalSum = currentSum + queue2.reduce((acc, val) => acc+val)
    
    const targetSum = totalSum/2
    
    while (i < extendedArr.length && j < extendedArr.length){
        if (currentSum === targetSum){
            return answer
        }
        else if (currentSum < targetSum){
            currentSum += extendedArr[j++]
            answer += 1
        } else if (currentSum > targetSum){
            currentSum -= extendedArr[i++]
            answer += 1
        }
    }
    
    
    
    
    
    return -1;
}