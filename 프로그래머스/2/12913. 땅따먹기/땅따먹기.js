function solution(land) {
    var answer = 0;
    const dp = land.map(row => [...row]);
    const n = land.length
    const m = land[0].length
    
    let max1 = 0
    let max1Idx = -1
    let max2 = 0
    
    for(let i=1; i< n; i++){
        
        // 이전행의 가장 큰 값과 그 인덱스, 2번째로 큰 값을 저장한다
        for(let j=0; j< m; j++){
            if (dp[i-1][j] > max1){
                max2 = max1
                max1 = dp[i-1][j]
                max1Idx = j
            } else if(dp[i-1][j] > max2){
                max2 = dp[i-1][j]
            }
        }
        
        for(let j=0; j<m; j++){
            if(max1Idx === j){
                dp[i][j] += max2
                continue
            }
            dp[i][j] += max1
        }
        
        
    }
    
    return Math.max(...dp.at(-1));
}