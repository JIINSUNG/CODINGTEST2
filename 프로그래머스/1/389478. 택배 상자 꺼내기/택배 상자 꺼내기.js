function solution(n, w, num) {
    var answer = 0;
    
    
    const boxIndexMap = {}
    const packages = Array.from({length : w}, () => [])
    let next = 1
    let targetBox = 0
    for (let i=0; i<n; i++){
        packages[targetBox].push(i)
        boxIndexMap[i] = targetBox
        targetBox += next
        
        if(targetBox === -1){
            targetBox = 0
            next = 1
        }
        
        else if (targetBox === w){
            targetBox = w-1
            next = -1
        }
    }
    
    while(true) {
        answer += 1
        const top = packages[boxIndexMap[num-1]].pop()
        if(top === num-1){
            break
        }
    }
    
    return answer;
}