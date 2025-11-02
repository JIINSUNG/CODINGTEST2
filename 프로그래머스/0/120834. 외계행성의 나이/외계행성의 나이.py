def solution(age):
    answer = ''
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    for idx in str(age):
        answer += alphabet[int(idx)]
    
    return answer