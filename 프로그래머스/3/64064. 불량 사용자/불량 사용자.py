def solution(user_id, banned_id):
    answer = set()
    
    
    def dfs(depth, visited):
        if depth == len(banned_id):
            temp_indices = [i for i, is_visited in enumerate(visited) if is_visited]
            
            answer.add(tuple(sorted(temp_indices)))
            return
        
        for i in range(len(user_id)):
            target = banned_id[depth]
            user = user_id[i]
            
            if (len(user) != len(target)) or visited[i]:
                continue
            
            isMatching = True
            for j in range(len(user)):
                if target[j] == '*':
                    continue
                    
                if user[j] != target[j]:
                    isMatching = False
                    break
                    
            if isMatching:
                visited[i] = True
                dfs(depth+1, visited)
                visited[i] = False
                
    
    dfs(0, [False for _ in range(len(user_id))])
    
    return len(answer)