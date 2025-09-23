function solution(prices) {
    var answer = Array.from({ length : prices.length}, () => 0)
    
    // 주식 가격이 떨어지지 않고 유지된 기간
    const stack = []
    
    for(let i=0; i< prices.length; i++){
        
        while(stack.length >0 && stack.at(-1)[0] > prices[i]){
            const target = stack.pop()
            const targetIdx = target[1]
            answer[targetIdx] = i - targetIdx
        }
        
        
        stack.push([prices[i], i])
    }
    
    for(const target of stack){
        answer[target[1]] = prices.length - target[1] -1
    }
    
    return answer;
}