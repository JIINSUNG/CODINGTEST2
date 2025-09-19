function solution(park, routes) {
    var answer = [];
    
    const moveMap = {
        "N" : [-1, 0],
        "S" : [1, 0],
        "W": [0, -1],
        "E": [0, 1],
    }
    const position = [0, 0]
    const N = park.length
    const M = park[0].length  
    
    for(let i=0; i<park.length; i++){
        for (let j=0; j<park[i].length; j++){
            if (park[i][j]=== "S"){
                position[0] = i
                position[1] = j
            }
        }
    }
    
    

    
    const checkCanMove = (direct, num) => {
        let current = [...position]
        let canMove = true
        
        for(let i=0; i< num; i++){
            current[0] += moveMap[direct][0]
            current[1] += moveMap[direct][1]
            
            if(current[0] < 0 || current[0] >= N || current[1] < 0 || current[1] >= M){
                canMove = false
                break
            }
            
            
            if(park[current[0]][current[1]] === 'X'){
                canMove = false
                break
            }
        }
        
        return canMove
    }
    
    

    
    for (const route of routes){
        const [direct, num] = route.split(' ')
        // 이동중 장애물을 만나거나, 벽을 넘어가면 이동하지 않는다
        if(checkCanMove(direct, num)){
            position[0] += moveMap[direct][0] * num
            position[1] += moveMap[direct][1] * num
        }
    }
    
    
    return position;
}