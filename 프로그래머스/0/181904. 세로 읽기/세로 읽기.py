def solution(my_string, m, c):
    answer = ''
    i = c-1
    
    while i < len(my_string):
        answer += my_string[i]
        i += m
    return answer