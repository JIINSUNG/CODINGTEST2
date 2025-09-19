function solution(survey, choices) {
    var answer = '';
    
    // 7 매우 동의 6 동의 5 약간동의 4 모르겠음 3 약간 비동의 2 비동의 1 매우 비동의
    const pointMap = new Map()
    
    for (let i =0; i< survey.length; i++){
        const [a, b] = survey[i]
        
        const select = choices[i]
        if(select === 7){
            pointMap.set(b, (pointMap.get(b) || 0)+3 )
        }
        if(select === 6){
            pointMap.set(b, (pointMap.get(b) || 0)+2 )

        }
        if(select === 5){
            pointMap.set(b, (pointMap.get(b) || 0)+1 )
        }
        if(select === 4){
            continue
        }
        if(select === 3){
            pointMap.set(a, (pointMap.get(a) || 0)+1 )
        }
        if(select === 2){
            pointMap.set(a, (pointMap.get(a) || 0)+2 )
            
        }
        if(select === 1) {
            pointMap.set(a, (pointMap.get(a) || 0)+3 )
        }
    }    
    
    // RT
    const R = pointMap.get("R") || 0
    const T = pointMap.get("T") || 0
    if(R >= T) {
        answer += "R"
    }else {
        answer += "T"
    }
    const C = pointMap.get("C") || 0
    const F = pointMap.get("F") || 0
    if(C >= F){
        answer += "C"
    } else {
        answer += "F"
    }
    const J = pointMap.get("J") || 0
    const M = pointMap.get("M") || 0    
    if(J >= M){
        answer += "J"
    }else{
        answer += "M"
    }
    
    const A = pointMap.get("A") || 0
    const N = pointMap.get("N") || 0 
    if(A >= N){
        answer += "A"
    }else{
        answer += "N"
    }    
    return answer;
}