def solution(n):
    answer = 0
    slice = 0
    while True:
        answer += 1
        slice += 6
        
        if(slice % n == 0):
            break
    return answer