def solution(arr, k):
    answer = []
    
    return [num+k if k % 2 == 0 else num*k for num in arr ]