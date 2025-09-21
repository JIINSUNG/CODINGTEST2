def solution(video_len, pos, op_start, op_end, commands):
    answer = ''
    
    
    video_len = video_len.split(":")
    video_time = int(video_len[0]) * 60 + int(video_len[1])
    pos = pos.split(":")
    pos_time = int(pos[0]) * 60 + int(pos[1])
    op_start = op_start.split(":")
    op_start_time = int(op_start[0]) * 60 + int(op_start[1])
    op_end = op_end.split(":")
    op_end_time = int(op_end[0]) * 60 + int(op_end[1])
    
    for command in commands:
        if pos_time < 0:
            pos_time = 0
        
        if video_time - pos_time < 10:
            pos_time = video_time
        
        if op_start_time <= pos_time <= op_end_time:
            pos_time = op_end_time
            
        if command == "prev":
            pos_time -= 10
        elif command == "next":
            pos_time += 10
        
        if pos_time < 0:
            pos_time = 0
        
        if video_time - pos_time < 10:
            pos_time = video_time
        
        if op_start_time <= pos_time <= op_end_time:
            pos_time = op_end_time
    
    return f"{str(int(pos_time/60)).zfill(2)}:{str(pos_time%60).zfill(2)}"
