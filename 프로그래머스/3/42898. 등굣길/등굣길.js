function solution(m, n, puddles) {
    const dp = Array.from({length : n}, () => Array(m).fill(0));
    
    
    for (const [x, y] of puddles) {
        dp[y - 1][x - 1] = -1; 
    }
    
    for(let j = 0; j < m; j++){
        if (dp[0][j] === -1) {
            break; 
        }
        dp[0][j] = 1;
    }

    for(let i = 0; i < n; i++){
        if (dp[i][0] === -1) {
            break; 
        }
        if (i !== 0) { 
            dp[i][0] = 1;
        }
    }
    
    const MOD = 1000000007;
    
    for(let i = 1; i < n; i++){
        for (let j = 1; j < m; j++){
            if(dp[i][j] === -1) continue;
            
            let from_up = 0;
            let from_left = 0;
            
            if(dp[i - 1][j] !== -1){
                from_up = dp[i - 1][j];
            }
            
            if(dp[i][j - 1] !== -1){
                from_left = dp[i][j - 1];
            }
            
            dp[i][j] = (from_up + from_left) % MOD;
        }
    }
    
    return dp[n - 1][m - 1];
}