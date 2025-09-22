function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';
    
    video_len = video_len.split(":")
    const video_time = +video_len[0] * 60 + +video_len[1]
    pos = pos.split(":")
    let now = +pos[0] * 60 + +pos[1]
    
    op_start = op_start.split(":")
    const op_start_time = +op_start[0] * 60 + +op_start[1]
    
    op_end = op_end.split(":")
    const op_end_time = +op_end[0]*60 + +op_end[1]
    
    
    const checkBoundary = (now, video_time, op_start_time, op_end_time) => {
        let current = now 
        // 음수가 된 경우 0으로
        if(current < 0){
            current = 0 
        }
        
        // 동영상의 남은 시간이 10초 미만인 경우 video_len으로
        if(video_time - current < 10){
            current = video_time
        }
        
        // 오프닝 구간인 경우, 오프닝 end로 점프
        if (op_start_time <= current && current <= op_end_time){
            current = op_end_time
        }
        
        return current
        
    }
    
    now = checkBoundary(now, video_time, op_start_time, op_end_time)
    
    for (const command of commands){
        
        
        
        if(command === "next"){
            now += 10 
        }
        
        else if (command === "prev"){
            now -= 10
        }
        
        now = checkBoundary(now, video_time, op_start_time, op_end_time)

    }
    
    return String(Math.floor(now/60)).padStart(2, '0') + ":" + String(now % 60).padStart(2, '0')
}