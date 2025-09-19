function solution(players, callings) {
    var answer = [];
    const rankMap = {}
    
    for (let i=0; i<players.length; i++){
        rankMap[players[i]] = i       
    }
    
    
    for (const call of callings){
        const idx = rankMap[call]
        
        const front = players[idx-1]
        const back = players[idx]
        
        players[idx-1] = back
        players[idx] = front
        
        rankMap[front] += 1
        rankMap[back] -= 1
        
    }
    
    
    return players;
}