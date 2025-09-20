
def solution(n, s, a, b, fares):
    answer = 0
    
    prices = [[float('inf') for _ in range(n+1)] for _ in range(n+1)]
    


    for ss, ee, ff in fares:
        prices[ss][ee] = ff
        prices[ee][ss] = ff
        

    for k in range(1, n+1):
        for i in range(1, n+1):
            for j in range(1, n+1):
                prices[i][j] = min(prices[i][j], prices[i][k] + prices[k][j])

    
    smallest_price = min(prices[s][a] + prices[a][b], prices[s][b] + prices[b][a], prices[s][a] + prices[s][b])
    
    for k in range(1, n+1):
        # k를 거쳐 가는 경우
        smallest_price = min(smallest_price, prices[s][k] + prices[k][a] + prices[k][b])
    return smallest_price