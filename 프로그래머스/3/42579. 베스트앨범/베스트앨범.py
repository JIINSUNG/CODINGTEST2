from collections import defaultdict, deque
def solution(genres, plays):
    answer = []
    
    genre_map = defaultdict(int)
    
    genre_list_map = defaultdict(list)
    
    for i in range(len(genres)):
        genre_map[genres[i]] += plays[i]
        genre_list_map[genres[i]].append([plays[i], i])
    
    genre_map = list(genre_map.items())
    genre_map.sort(key= lambda x : x[1], reverse=True)
    
    
    
    # key를 하나씩 꺼내온다
    for key, value in genre_map:
        targetList = genre_list_map[key]
        targetList.sort(key = lambda x : (-x[0], x[1]))
        for i in range(2):
            if i == len(targetList):
                break
            
            answer.append(targetList[i][1])
    
    
    return answer