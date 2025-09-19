function solution(dartResult) {
    
    // 3번의 다트 기회
    // 점수는 0-10점
    
    // S, D, T 영역을 맞추면 각각 점수^1, 점수^2, 점수^3
    // 옵션 (중첩 가능)
    // 스타상 : 현 점수 + 바로전 점수 -> 각 2배 
    // 아차상 : 현 점수 음수로 
    
    dartResult = dartResult.split('')
    // console.log(dartResult)
    const stack = []
    let lastIsDigit = false
    
    for (const char of dartResult){
        // 맞춘 점수면 스택에 집어넣기
        if(!isNaN(char)){
            if(!lastIsDigit){
                stack.push(Number(char))   
            }
            
            else{
                const last = stack.pop()
                stack.push(Number(last+char))
            }
            lastIsDigit = true
            continue 
        }
        
        if (char === 'S'){
        }
        
        if (char === 'D'){
            // D영역이라면 
            // 기존에 맞춘 점수를 제곱함
            const score = stack.pop()
            stack.push(score * score)
        }
        
        if (char === 'T'){
            // T영역이라면 
            // 기존에 맞춘 점수를 세제곱함
            const score = stack.pop()
            stack.push(score * score * score)
        }
        if (char === '*'){
            // 현재 점수와
            // 이전 점수가 있다면 각각 2배로 만듬
            
            const score = stack.pop()
            if(stack.length >= 1){
                const score2 = stack.pop()
                stack.push(score2*2)
            }
            stack.push(score*2)
        }
        if (char === '#'){
            const score = stack.pop()
            stack.push(-score)
        }
        
        lastIsDigit = false
    
    }
    
    const answer = stack.reduce((acc, val) => acc+val)
    return answer;
}