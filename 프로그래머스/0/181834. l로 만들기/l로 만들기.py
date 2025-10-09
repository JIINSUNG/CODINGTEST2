def solution(myString):
    answer = ''
    myString = list(myString)
    for i in range(len(myString)):
        if myString[i] < 'l':
            myString[i] = 'l'
    return ''.join(myString)