function solution(numbers) {
    var answer = new Set();
    const visited = new Set()
 
    // 소수 판정 함수 
    const findPrimeNumber = (n) => {
        if (n <= 1) return false
        if (n === 2) return true
        
        for(let i=2; i<= Math.floor(n**0.5); i++){
            if(n % i === 0){
                return false
            }    
        }
        
        return true
    }

    
    numbers = numbers.split('')
    
    // 모든 조합에 대하여 findPrimeNumber 돌려보기
    const dfs = (depth, value, targetDepth, visited) => {
        if(depth === targetDepth){
            if(findPrimeNumber(parseInt(value))){
                answer.add(parseInt(value))
            }
            return
        }
        
        for (let i=0; i < numbers.length; i++){
            if(!visited[i]){
                visited[i] = true
                dfs(depth+1, value+numbers.at(i), targetDepth, visited)
                visited[i] = false 
            }
        }
    }
    
    // 조합의 개수
    for(let i=1; i <= numbers.length; i++){
        const visited = Array.from({length : numbers.length}, () => false)
        dfs(0, '', i, visited)
    }
    
    
    
    return answer.size;
}