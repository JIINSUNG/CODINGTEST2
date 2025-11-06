def solution(myString):
    answer = []
    myString = myString.split('x')
    
    myString.sort()
    
    for word in myString:
        if word == '':
            continue
        answer.append(word)
    
    return answer