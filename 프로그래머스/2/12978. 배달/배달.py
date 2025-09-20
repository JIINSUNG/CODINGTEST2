import heapq

def dijkstra(start, distances, path, K):
    cnt = 0
    distances[start] = 0
    pq = []
    
    pq.append([0, start])
    
    while pq:
        dist, node = heapq.heappop(pq)
        if dist > distances[node]:
            continue
        
        for ndist, nnode in path[node]:
            if ndist + dist <= distances[nnode]:
                distances[nnode] = ndist + dist
                heapq.heappush(pq, [ndist+dist, nnode])
    
    for node, value in distances.items():
        if value <= K:
            cnt += 1
    return cnt 
        


def solution(N, road, K):
    answer = 0
    distances = {node: float('inf') for node in range(1, N+1)}


    path = [[] for _ in range(N+1)]
    

    for i in range(len(road)):
        s, e, d = road[i]
        path[s].append([d, e])
        path[e].append([d, s])    


    return dijkstra(1, distances, path, K)
