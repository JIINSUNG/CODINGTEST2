def solution(land):
    answer = 0
    
    max1 = 0
    max1Idx = -1
    max2 = 0
    for i in range(1, len(land)):
        for j in range(len(land[0])):
            if land[i-1][j] > max1:
                max2 = max1
                max1 = land[i-1][j]
                max1Idx = j
            elif land[i-1][j] > max2:
                max2 = land[i-1][j]
        
        for j in range(len(land[0])):
            if j == max1Idx:
                land[i][j] += max2
            else:
                land[i][j] += max1


    return max(land[-1])