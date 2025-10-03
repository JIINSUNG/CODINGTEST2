function solution(m, n, puddles) {
    const dp = Array.from({length : n}, () => Array.from({length : m}, () => 0))
    
    
    for (const puddle of puddles){
        dp[puddle[1]-1][puddle[0]-1] = -1
    }
    
    
    for (let i=0; i<m; i++){
        if(dp[0][i] === -1){
            break
        }
        dp[0][i] = 1
    }
    
    for (let i=0; i<n; i++){
        if(dp[i][0] === -1){
            break
        }
        dp[i][0] = 1
    }
    
    const MOD = 1000000007;
    
    for(let i=1; i<n; i++){
        for(let j=1; j<m; j++){
            if(dp[i][j] === -1){
                continue
            }
            
            const left = dp[i-1][j]
            const right = dp[i][j-1]
            
            if(left !== -1){
                dp[i][j] += left
            }
            
            if(right !== -1){
                dp[i][j] += right 
            }
            
            dp[i][j] = dp[i][j] % 1000000007
            
        }
    }
    
    return dp[n-1][m-1]

    
    
    
    
}