function solution(n, control) {
    for(const con of control){
        if (con == 'w'){
            n += 1
        } else if (con == 's'){
            n -= 1 
        }else if (con == 'd'){
            n += 10
        }else if (con == 'a'){
            n -= 10
        }
    }
    return n;
}