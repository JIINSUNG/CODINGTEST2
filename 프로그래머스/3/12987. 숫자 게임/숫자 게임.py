import heapq
def solution(A, B):
    heapq.heapify(A)
    heapq.heapify(B)
    answer = 0
    
    while B:
        target = heapq.heappop(A)
        
        while B:
            bPlayer = heapq.heappop(B)
            if (target < bPlayer):
                answer += 1
                break
            
    
    return answer