def solution(n, s):
    if s < n:
        return [-1]
    q = s // n  
    r = s % n  
    answer = []

    for _ in range(n - r):
        answer.append(q)

    for _ in range(r):
        answer.append(q + 1)

    return answer
