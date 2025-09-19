function solution(participant, completion) {
    var answer = '';
    const completeMap = new Map()    

    for (const participate of participant){
        completeMap.set(participate, (completeMap.get(participate) || 0)+1)
    }
    
    for (const complete of completion){
        completeMap.set(complete, (completeMap.get(complete) || 0)+1)
    }
    
    for(const [key, value] of completeMap){
        if (!(value % 2 === 0)){
            return key
        }
    }
    
    
}