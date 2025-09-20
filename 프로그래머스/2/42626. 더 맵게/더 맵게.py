import heapq

def solution(scoville, K):
    answer = 0
    
    heapq.heapify(scoville)

    while scoville[0] < K:
        
        if len(scoville) < 2:
            return -1
        answer += 1
        left = heapq.heappop(scoville)
        right = heapq.heappop(scoville)

        new_scoville = left + right * 2
        heapq.heappush(scoville, new_scoville)

    return answer