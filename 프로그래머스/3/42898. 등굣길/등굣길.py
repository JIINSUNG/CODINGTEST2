def solution(m, n, puddles):
    dp = [[0 for _ in range(m)] for _ in range(n)]
    dp[0][0] = 1
    
    
    for x, y in puddles:
        dp[y-1][x-1] = -1
    
    for i in range(1, m):
        if dp[0][i] == -1:
            break
        dp[0][i] = 1
        
    
    for i in range(1, n):
        if dp[i][0] == -1:
            break
        dp[i][0] = 1
        
    for i in range(1, n):
        for j in range(1, m):
            if dp[i][j] == -1:
                continue
            from_left = 0
            from_top = 0
            
            if dp[i][j-1] != -1:
                from_left = dp[i][j-1]
            if dp[i-1][j] != -1:
                from_top = dp[i-1][j]
            
            dp[i][j] = (from_left + from_top) % 1000000007
    
    return dp[n-1][m-1]