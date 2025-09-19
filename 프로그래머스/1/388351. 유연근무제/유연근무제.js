function solution(schedules, timelogs, startday) {
    var answer = 0;
    
    for (let i=0; i< schedules.length; i++){
        const schedule = schedules[i]
        const timelog = timelogs[i]
        
        const dueTimehour = Math.floor(schedule/100);
        const dueTimeMinute = schedule%100
        const dueTime = dueTimehour * 60 + dueTimeMinute + 10
        
        let cantake = true; 
        
        for(let j=0; j < timelog.length; j++){
            
            const isWeekend = ((startday-1 + j) % 7) === 5 || ((startday-1 + j) % 7) === 6
            
            if(isWeekend){
                continue
            }
            
            const time = timelog[j]
            const tTimeHour = Math.floor(time/100);
            const tTimeMinute = time % 100
            const tTime = tTimeHour * 60 + tTimeMinute
            
            if(dueTime < tTime){
                cantake = false;
                break
            }
        }
        if(cantake){
            answer += 1
        }

        
    }
    
    
    return answer;
}