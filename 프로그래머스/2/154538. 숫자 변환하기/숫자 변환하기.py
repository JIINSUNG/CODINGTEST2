def solution(x, y, n):
    
    dp = [float('inf') for _ in range(y+1)]
          
    dp[x] = 0
    i = x
    while i * 2 <= y or i * 3 <= y or i+n <= y:
        if i * 2 <= y:
            dp[i*2] = min(dp[i*2], dp[i] + 1)
        if i * 3 <= y:
            dp[i*3] = min(dp[i*3], dp[i] + 1)
        if i + n <= y:
            dp[i+n] = min(dp[i+n], dp[i] + 1 )
        i += 1
        
    return -1 if dp[y] == float('inf') else dp[y]
      