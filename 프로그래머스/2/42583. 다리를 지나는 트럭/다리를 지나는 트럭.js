function solution(bridge_length, weight, truck_weights) {
    var passedCar = 0;
    
    // 현재 다리의 하중
    let currentWeight = 0 
    
    // 경과된 시간
    let second = 0
    
    // 현재 다리에 올라간 차들
    const queue = [] 
    
    
    let carIdx = 0
    while(passedCar < truck_weights.length){
        second++
        
        // 현재 다리에 차가 있다면 한칸씩 전진시킨다
        if(queue.length > 0){
            const queueSize = queue.length
            for(let i=0; i<queueSize; i++){
                const [car, dist] = queue.shift()
                // 다리를 못 건넜다면 다시 큐에 삽입
                if(dist+1 < bridge_length){
                    queue.push([car, dist+1])
                } else {
                    currentWeight -= car
                    passedCar += 1
                }  
            }
        }
        
        
        // 현재 차가 올라가도 최대하중 이하라면
        if ((truck_weights.at(carIdx) + currentWeight) <= weight){
            // 현재 차를 다리에 올림
            queue.push([truck_weights.at(carIdx), 0])
            currentWeight += truck_weights.at(carIdx)
            carIdx++
        }
    }
    

    
    
    return second;
}