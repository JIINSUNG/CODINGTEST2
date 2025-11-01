function solution(n) {
    const graph = Array.from({length : n}, () => Array.from({length : n}, () => 0))
    
    for(let i=0; i< n; i++){
        graph[i][i] = 1
    }
    
    return graph
}

