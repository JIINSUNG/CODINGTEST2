function solution(user_id, banned_id) {
    let answer = new Set()
    
    
    
    const dfs = (depth, visited) => {
        if (depth === banned_id.length){
            answer.add(String(visited))
            return
        }
        
        for(let i=0; i< user_id.length; i++){
            const ban_id = banned_id[depth]

            // 이미 처리된 아이디라면
            if (visited[i]){
                continue
            }
            
            // 길이가 같지 않다면
            if(user_id[i].length !== ban_id.length){
                continue
            }
            
            let isMatching = true
            for(let j=0; j< user_id[i].length; j++){
                if (ban_id[j] === '*') {
                    continue
                }

                if(user_id[i].at(j) !== ban_id.at(j)){
                    isMatching = false
                    break
                }                
            }
            
            if(isMatching){
                // dfs 돌리기
                visited[i] = true
                dfs(depth+1, visited)
                visited[i] = false
            }
            
        }
        
    }
    dfs(0, Array.from({length : user_id.length}, () => false))
    
    return answer.size
}