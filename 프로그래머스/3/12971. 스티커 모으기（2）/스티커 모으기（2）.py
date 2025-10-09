def solution(sticker):
    answer = 0
    
    if len(sticker) == 1:
        return sticker[0]
    elif len(sticker) == 2:
        return max(sticker[0], sticker[1])
    
    withOne = []
    withOutOne = []
    
    for i in range(0, len(sticker)-1):
        withOne.append(sticker[i])
        
    for i in range(1, len(sticker)):
        withOutOne.append(sticker[i])
    
    
    
    dp = [withOne[0], max(withOne[0], withOne[1])]
    dp2 = [withOutOne[0], max(withOutOne[0], withOutOne[1])]
    
    
    for i in range(2, len(sticker)-1):
        dp.append(max(dp[i-2] + withOne[i], dp[i-1]))
        dp2.append(max(dp2[i-2] + withOutOne[i], dp2[i-1]))

    
    return max(dp[-1], dp2[-1])