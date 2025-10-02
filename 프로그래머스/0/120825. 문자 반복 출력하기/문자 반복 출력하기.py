def solution(my_string, n):
    answer = ''
    
    for i in range(len(my_string)):
        answer += n*my_string[i]
    
    
    return answer