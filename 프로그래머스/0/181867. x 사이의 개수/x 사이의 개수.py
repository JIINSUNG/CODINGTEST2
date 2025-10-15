def solution(myString):
    answer = []
    
    myString = myString.split('x')
    for o in myString:
        answer.append(len(o))
    return answer