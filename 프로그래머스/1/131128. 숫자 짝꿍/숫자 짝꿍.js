function solution(X, Y) {
    var answer = ""
    let arr = []
    
    const countMapX = new Map();
    const countMapY = new Map();
    for (const x of X){
        countMapX.set(x, (countMapX.get(x) || 0) + 1)
    }
    
    for (const y of Y){
        countMapY.set(y, (countMapY.get(y) || 0) + 1)
    }
    
    for (const [key, value] of countMapX){
        if((countMapY.get(key) || 0) > 0){
            const pair = Math.min(countMapY.get(key), value)
            for(let i=0; i< pair; i++){
                arr.push(key)
            }
        }
    }
    
    if(arr.length === 0){
        return "-1"
    }
    
    arr = arr.sort((a, b) => b-a)
    
    for (const value of arr){
        answer += value
    }
    
    if(answer.length >= 2 && answer.at(0) === "0" && answer.at(-1) === "0"){
        return "0"
    }
    
    return answer
    
    
    
}