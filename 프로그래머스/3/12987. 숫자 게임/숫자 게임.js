function solution(A, B) {
    var answer = 0
    A = A.sort((a, b) => a-b)
    B = B.sort((a,b) => a-b)
    
    let idx = 0
    for(let i=0; i< A.length; i++){
        while(idx < B.length){
            if (A[i] < B[idx]){
                answer += 1
                idx++
                break
            }
            idx++
        }
        
    }
    
    return answer
}