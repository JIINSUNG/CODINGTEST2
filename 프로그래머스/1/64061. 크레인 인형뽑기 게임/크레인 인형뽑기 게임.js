function solution(board, moves) {
    var answer = 0;
    
    const stack = [] 
    
    // 어피치 4 화난공룡 3 무지 2 고양이 1 개 5
    
    // 4 3 5 
    for(let target of moves){
        for(let i = 0; i < board.length; i++){
            if(board[i][target-1] !== 0){
                const toy = board[i][target-1]
                board[i][target-1] = 0
                
                if(toy === stack.at(-1)){
                    stack.pop()
                    answer+= 2
                } else {
                    stack.push(toy)    
                }
                
                break
            }
        }
    }
    
    return answer;
}