function solution(myString) {
    var answer = [];
    var idx = [];
    for(let i=0; i<myString.length; i++){
        if (myString.at(i) === 'x'){
            idx.push(i)
        }
    }
    
    if(idx.length === 0){
        return [0]
    }
    
    let front = idx.shift()
    answer.push(front)
    while (idx.length >0){
        let target = idx.shift()
        answer.push(target-(front+1))
        front = target
    }
    answer.push(myString.length-(front+1) )
    return answer;
}